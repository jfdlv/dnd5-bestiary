import React from 'react';

import {connect} from 'react-redux';
import {getAllMonstersAction,
        getMonsterInfoAction} from '../../actions/index';
import {bindActionCreators} from 'redux';



//my components
import MonsterModal from './MonsterModal.js';

// //react-bootstrap components
import Container from 'react-bootstrap/Container';

//react-bootstrap-table2
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import './MonstersTable.css';

const monsterTableColumns = [{
  dataField: 'name',
  text: 'Monster Name',
  filter: textFilter()
}];

class MonstersTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMonsterModal: false,
      showSpecialFeatures: false,
      showMonsterActions: false
    }
  }

  componentDidMount() { 
    this.props.getAllMonstersAction();
  }

  handleMonsterModalOpen = () => { 
    this.setState({showMonsterModal: true});
  }

  handleMonsterModalClose = () => {
    this.setState({showMonsterModal: false});
  }

  rowEvents = {
    onClick: (e,row) => { 
        this.props.getMonsterInfoAction(row.url);
        this.handleMonsterModalOpen();
    }
  };

  render() {  
    // let languages = this.props.monsterInfo ? this.props.monsterInfo.languages.split(',') : "";
    return (
      <Container>
        {this.props.allMonsters && 
        <React.Fragment>
          <BootstrapTable bootstrap4 keyField='name' data={ this.props.allMonsters } columns={ monsterTableColumns } filter={ filterFactory() } rowEvents={ this.rowEvents }/>
          <MonsterModal handleMonsterModalClose={this.handleMonsterModalClose} showMonsterModal={this.state.showMonsterModal}/>
        </React.Fragment>}
      </Container>
    );
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookList.
  return {
    allMonsters: state.allMonsters,
    monsterInfo: state.monsterInfo
  };
}

//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  return bindActionCreators({
    getAllMonstersAction,
    getMonsterInfoAction
  }, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonstersTable);
