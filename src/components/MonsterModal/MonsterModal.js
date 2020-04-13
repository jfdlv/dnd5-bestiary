import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {getMonsterSpellsAction} from '../../actions/index';
import {bindActionCreators} from 'redux';

//my components
import GeneralInfo from './GeneralInfo';
import SpecialAbilities from './SpecialAbilities';
import MonsterActions from './MonsterActions';
import MonsterLegendaryActions from './MonsterLegendaryActions';
import SpellList from './SpellList';

//react-bootstrap components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import "./MonsterModal.css";
class MonsterModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          showSpecialAbilities: false,
          showMonsterActions: false,
          showMonstersLegendaryActions: false,
          showMonsterSpells: false
        }
    }

    onSpellTabSelected = () => {
        this.setState({showMonsterSpells: true,showMonstersLegendaryActions: false, showMonsterActions: false, showSpecialAbilities: false}); 
        let urls = this.props.monsterInfo ? this.props.monsterInfo.spell_list : null;
        this.props.getMonsterSpellsAction(urls);
    }

    render() {
        return <Modal show={this.props.showMonsterModal} onHide={this.props.handleMonsterModalClose} size={"lg"} className="search-modal">
                    <Modal.Header closeButton>
                        <Container>
                            <Row>
                                <div className="monster-name-cr-container">
                                    <div className="monster-name">
                                        {this.props.monsterInfo ? this.props.monsterInfo.name : ""}
                                    </div>
                                    <div className="monster-cr">
                                        CR {this.props.monsterInfo ? this.props.monsterInfo.challenge_rating : "--"}
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="buttons-container">
                                    <ButtonGroup>
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: false, showMonsterActions: false, showMonstersLegendaryActions: false, showMonsterSpells: false})}} disabled={!this.state.showSpecialAbilities && !this.state.showMonsterActions && !this.state.showMonstersLegendaryActions && !this.state.showMonsterSpells}>General Info</Button>
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: true, showMonsterActions: false, showMonstersLegendaryActions:false, showMonsterSpells: false})}} disabled={this.state.showSpecialAbilities}>Special abilities</Button>
                                    {this.props.monsterInfo && !_.isEmpty(this.props.monsterInfo.spell_list) && <Button className="menu-button" variant="secondary" onClick={this.onSpellTabSelected} disabled={this.state.showMonsterSpells}>Spell List</Button>}
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showMonsterActions: true, showSpecialAbilities: false, showMonstersLegendaryActions: false, showMonsterSpells: false})}} disabled={this.state.showMonsterActions}>Actions</Button>
                                    {this.props.monsterInfo && !_.isEmpty(this.props.monsterInfo.legendary_actions) && <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showMonstersLegendaryActions: true, showMonsterActions: false, showSpecialAbilities: false, showMonsterSpells: false})}} disabled={this.state.showMonstersLegendaryActions}>Legendary Actions</Button>}
                                    </ButtonGroup>
                                </div>
                            </Row>
                        </Container>
                    </Modal.Header>
                    <Modal.Body>
                        {(!this.state.showSpecialAbilities && !this.state.showMonsterActions && !this.state.showMonstersLegendaryActions && !this.state.showMonsterSpells) && <GeneralInfo/>}
                        {this.state.showSpecialAbilities && <SpecialAbilities/>}
                        {this.state.showMonsterActions && <MonsterActions/>}
                        {this.state.showMonstersLegendaryActions && <MonsterLegendaryActions/>}
                        {this.state.showMonsterSpells && <SpellList/>}
                    </Modal.Body>
                </Modal>}
} 

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      monsterInfo: state.monsterInfo
    };
}

function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({
        getMonsterSpellsAction
    }, 
      dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(MonsterModal);