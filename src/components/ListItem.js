import React, { Component } from 'react';
import { Text , TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';


class ListItem extends Component {
  renderDescription() {
    if ( this.props.expanded ) {
      return (
        <Text>{this.props.animal.description}</Text>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={ () => this.props.selectAnimal(this.props.animal.id) }
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.animal.title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedAnimalId === ownProps.animal.id;
  return { expanded };
};


export default connect(mapStateToProps, actions)(ListItem);
