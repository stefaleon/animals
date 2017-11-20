import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class AnimalsList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.animals);
  }

  howToRenderRow(animal) {
    return <ListItem animal={animal}/>
  }

  render() {
    return(
      <ListView
        dataSource = {this.dataSource}
        renderRow = {this.howToRenderRow}
       />
    );
  }
}

const mapStateToProps = state => {
  return { animals: state.animals };
};

export default connect(mapStateToProps)(AnimalsList);
