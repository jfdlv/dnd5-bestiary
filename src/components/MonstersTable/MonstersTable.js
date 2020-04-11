import React from 'react';

import {connect} from 'react-redux';
import {getPageMonstersAction,
        getMonsterInfoAction,
        searchTermAction} from '../../actions/index';
import {bindActionCreators} from 'redux';



//my components
import MonsterModal from './MonsterModal.js';

// //react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//react-bootstrap-table2
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

import './MonstersTable.css';

const monsterTableColumns = [{
  dataField: 'name',
  text: 'Monster Name'
},{
  dataField: 'type',
  text: 'Type'
},{
  dataField: 'challenge_rating',
  text: 'CR'
}];

class MonstersTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMonsterModal: false,
      showSpecialFeatures: false,
      showMonsterActions: false,
      searchTerm: ""
    }
  }

  componentDidMount() { 
    this.props.getPageMonstersAction();
  }

  handleMonsterModalOpen = () => { 
    this.setState({showMonsterModal: true});
  }

  handleMonsterModalClose = () => {
    this.setState({showMonsterModal: false});
  }

  handlePreviousButtonPress = () => { 
    this.props.getPageMonstersAction(this.props.pageMonsters.previous);
  }

  handleNextButtonPress = () => {
    this.props.getPageMonstersAction(this.props.pageMonsters.next);
  }

  enterPressed = (e) => {
    if(e.key === "Enter") {
      this.searchMonster();
    }
  }

  updateSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  searchMonster = () => {
    console.log(this.state.searchTerm);
    this.props.searchTermAction(this.state.searchTerm);
  }


  rowEvents = {
    onClick: (e,row) => {
        this.props.getMonsterInfoAction(row.slug);
        this.handleMonsterModalOpen();
    }
  };

  render() {  
    return (
      <Container>
        {this.props.pageMonsters && 
        <React.Fragment>
          
          <Row className="info-row">
            
            <Col style={{textAlign: "left"}}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text onClick={this.searchMonster}><i className="fas fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onKeyPress={this.enterPressed} onChange={(e)=>{this.updateSearchTerm(e)}}/>
              </InputGroup>
            </Col>
            
            <Col style={{textAlign: "right"}}>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled={!this.props.pageMonsters.previous} onClick={this.handlePreviousButtonPress}><i className="fas fa-chevron-circle-left"></i></Button>
                <Button variant="secondary" disabled={!this.props.pageMonsters.next} onClick={this.handleNextButtonPress}><i className="fas fa-chevron-circle-right"></i></Button>
              </ButtonGroup>
            </Col>
          
          </Row>

          <BootstrapTable bootstrap4 classes="table-dark" rowClasses="pointer-on-row" keyField='name' data={ this.props.pageMonsters ? this.props.pageMonsters.results : [] } columns={ monsterTableColumns } filter={ filterFactory() } rowEvents={ this.rowEvents }/>
          
          <MonsterModal handleMonsterModalClose={this.handleMonsterModalClose} showMonsterModal={this.state.showMonsterModal}/>
        
        </React.Fragment>}
      
      </Container>
    );
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside of BookList.
  return {
    pageMonsters: state.pageMonsters,
    monsterInfo: state.monsterInfo
  };
}

//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  return bindActionCreators({
    getPageMonstersAction,
    getMonsterInfoAction,
    searchTermAction
  }, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonstersTable);
