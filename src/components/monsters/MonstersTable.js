import React from 'react';

import {connect} from 'react-redux';
import {getAllMonstersAction,
        getMonsterInfoAction} from '../../actions/index';
import {bindActionCreators} from 'redux';

//util
import util from "../../util/util";

//react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

//react-bootstrap-table2
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import monsterInfo from '../../reducers/monsterInfo';

import './MonstersTable.css';

const monsterTableColumns = [{
  dataField: 'name',
  text: 'Monster Name',
  filter: textFilter()
}];

const monsterGeneralInfoTableColumns = [{
  dataField:'_id',
  text: "",
  hidden: true
},{
  dataField: 'size',
  text: 'Size'
},{
  dataField: 'type',
  text: 'Type'
},{
  dataField: 'alignment',
  text: 'Alignment'
},{
  dataField: 'armor_class',
  text: 'AC'
},{
  dataField: 'hit_points',
  text: 'HP'
},{
  dataField: 'hit_dice',
  text: 'Hit dice'
},{
  dataField: 'speed',
  text:'Speed',
  formatter: (cell,row,rowIndex) => {
    console.log(cell)
    return <div className='multiple-values-container'>
      {cell.walk && <div><span>Walk: </span><span>{cell.walk}</span></div>}
      {cell.swim && <div><span>Swim: </span><span>{cell.swim}</span></div>}
      {cell.fly && <div><span>Fly: </span><span>{cell.fly}</span></div>}
      {cell.burrow && <div><span>Burrow: </span><span>{cell.burrow}</span></div>}

    </div>
  }
  
}]

const monsterAbilityScoresAndModsColumns = [{
  dataField: 'strength',
  text: 'Strength',
  formatter: (cell) => {
    console.log(util.abililityModCalculator(cell));
    return cell && 
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
},{
  dataField: 'dexterity',
  text: 'Dexterity',
  formatter: (cell) => {
    return cell && 
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
},{
  dataField: 'constitution',
  text: 'Constitution',
  formatter: (cell) => {
    return cell && 
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
},{
  dataField: 'intelligence',
  text: 'Intelligence',
  formatter: (cell) => {
    return cell && 
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
},{
  dataField: 'wisdom',
  text: 'Wisdom',
  formatter: (cell) => {
    return cell && 
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
},{
  dataField: 'charisma',
  text: 'Charisma',
  formatter: (cell) => {
    return cell &&
      <div className="multiple-values-container">
        <div>
          <span>Ability Score:</span><span>{cell}</span>
        </div>
        <div>
          <span>Ability Modifier:</span><span>{util.abililityModCalculator(cell)}</span>
        </div>
      </div>
  }
}]

class MonstersTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMonsterModal: false
    }
  }

  componentDidMount() { 
    this.props.getAllMonstersAction();
  }

  componentDidUpdate(prevProps) {
    if(this.props.monsterInfo !== prevProps.monsterInfo) {
      console.log(this.props.monsterInfo);
    }
  }

  handleMonsterModalOpen = () => { 
    this.setState({showMonsterModal: true});
  }

  handleMonsterModalClose = () => {
    this.setState({showMonsterModal: false});
  }

  renderMonsterGeneralInfo = () => {
    console.log("entra?!");
    var data = [];
    data.push(this.props.monsterInfo);
    return (<React.Fragment>
        <BootstrapTable bootstrap4 keyField='name' columns={monsterGeneralInfoTableColumns} data={data}/>
    </React.Fragment>)
  }

  renderMonsterAbilityScoresAndMods = () => { 
    var data = [];
    data.push(this.props.monsterInfo);
    return (<React.Fragment>
      <BootstrapTable bootstrap4 keyField='name' columns={monsterAbilityScoresAndModsColumns} data={data}/>
    </React.Fragment>)
  }

  rowEvents = {
    onClick: (e,row) => { 
        this.props.getMonsterInfoAction(row.url);
        this.handleMonsterModalOpen();
    }
  };

  render() {  
    return (
      <React.Fragment>
        {this.props.allMonsters && 
        <React.Fragment>
          <BootstrapTable bootstrap4 keyField='name' data={ this.props.allMonsters } columns={ monsterTableColumns } filter={ filterFactory() } rowEvents={ this.rowEvents }/>
          <Modal show={this.state.showMonsterModal} onHide={this.handleMonsterModalClose} size={"lg"} className="search-modal">
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.monsterInfo ? this.props.monsterInfo.name : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {this.props.monsterInfo && this.renderMonsterGeneralInfo()}
                  {this.props.monsterInfo && this.renderMonsterAbilityScoresAndMods()}
                </Modal.Body>
          </Modal>
        </React.Fragment>}
      </React.Fragment>
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
