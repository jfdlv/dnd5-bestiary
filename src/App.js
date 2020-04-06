import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {getAllMonstersAction} from './actions/index';
import {bindActionCreators} from 'redux';

//my components
import MonstersTable from "./components/MonstersTable/MonstersTable";

//react-bootstrap2
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const columns = [{
  dataField: 'name',
  text: 'Monster Name',
  filter: textFilter()
}];

class App extends React.Component {

  componentDidMount() { 
    this.props.getAllMonstersAction();
  }

  render() {  
    console.log(this.props.allMonsters);
    console.log('etra')
    return (
      <div style={{padding: "50px"}}>
        <MonstersTable/>
      </div>
    );
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookList.
  return {
    allMonsters: state.allMonsters
  };
}

//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  return bindActionCreators({
    getAllMonstersAction}, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
