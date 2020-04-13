import React from 'react';
import _ from 'lodash';
import './App.css';

import {connect} from 'react-redux';

//my components
import MonstersTable from "./components/MonstersTable/MonstersTable";
import SessionMonsters from "./components/SessionMonsters/SessionMonsters";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

class App extends React.Component {


  render() {  
    return (
      <div>
        {!_.isEmpty(this.props.sessionMonsters) && <SessionMonsters/>}
        <MonstersTable/>
      </div>
    );
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookList.
  return {
    allMonsters: state.allMonsters,
    sessionMonsters: state.sessionMonsters 
  };
}

export default connect(mapStateToProps, null)(App);
