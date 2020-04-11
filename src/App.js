import React from 'react';
import './App.css';

import {connect} from 'react-redux';

//my components
import MonstersTable from "./components/MonstersTable/MonstersTable";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

class App extends React.Component {

  // componentDidMount() { 
  //   this.props.getAllMonstersAction();
  // }

  render() {  
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
// function mapDispatchToProps(dispatch){
//   // Whenever selectBook is called, the result should be passed to all of our reducers.
//   return bindActionCreators({
//     getAllMonstersAction}, 
//     dispatch);
// }

export default connect(mapStateToProps, null)(App);
