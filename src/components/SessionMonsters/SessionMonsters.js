import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMonsterInfoAction,updateSessionMonstersAction} from '../../actions/index';

//mycomponents
import MonsterModal from '../MonstersTable/MonsterModal';

//react-bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//react-bootstrap-table2
import BootstrapTable from 'react-bootstrap-table-next';

class SessionMonsters extends React.Component { 

    state = {
        showMonsterModal: false
    }

    handleMonsterModalOpen = () => { 
        this.setState({showMonsterModal: true});
    }
    
    handleMonsterModalClose = () => {
        this.setState({showMonsterModal: false});
    }

    showMonsterInfo = (monster) => {
        this.props.getMonsterInfoAction(monster.slug);
        this.handleMonsterModalOpen();
    }

    removeMonsterFromSession = (monster) => {
        console.log(this.props.sessionMonsters);
        let monsters = [];
        monsters = monsters.concat(this.props.sessionMonsters);
        _.remove(monsters, (element) => {
            return element.slug === monster.slug;
        })
        localStorage.setItem('sessionMonstersDnd5Bestiary', JSON.stringify(monsters));
        this.props.updateSessionMonstersAction(monsters);
    }

    render() {

        const monsterTableColumns = [{
            dataField: 'name',
            text: 'Monster Name'
          },{
            dataField: 'type',
            text: 'Type'
          },{
            dataField: 'challenge_rating',
            text: 'CR'
        },{
            dataField: 'slug',
            text: "",
            formatter: (cell,row,rowIndex) => {
      
              return <Row md={3} xs={1}>
                        <Col className="table-row-button-container">
                            <Button className="table-row-button" variant="secondary" onClick={()=>{this.removeMonsterFromSession(row)}}>Remove</Button>
                        </Col> 
                        <Col className="table-row-button-container">
                            <Button className="table-row-button" variant="secondary" onClick={()=>{this.showMonsterInfo(row)}}>View</Button>
                        </Col>
                    </Row>
            }
          }];


        return <Container>
            <BootstrapTable bootstrap4 classes="table-dark" keyField='name' data={ this.props.sessionMonsters ? this.props.sessionMonsters : [] } columns={ monsterTableColumns }/>
            
            <MonsterModal handleMonsterModalClose={this.handleMonsterModalClose} showMonsterModal={this.state.showMonsterModal}/>

            <hr/>
        </Container>
    }

}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      sessionMonsters: state.sessionMonsters
    };
}

function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({
      getMonsterInfoAction,
      updateSessionMonstersAction
    }, 
      dispatch);
}  
  

export default connect(mapStateToProps, mapDispatchToProps)(SessionMonsters);