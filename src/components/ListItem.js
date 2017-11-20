import React, { Component } from 'react';
import { Text , TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { UIManager,  Platform, LayoutAnimation } from 'react-native';


class ListItem extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }


  renderDescription() {
    if ( this.props.expanded ) {
      return (
        <CardSection>
          <Text style={{ flex:1 }}>
            {this.props.animal.description}
          </Text>
        </CardSection>
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
