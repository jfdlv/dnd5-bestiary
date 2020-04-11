import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

//my components
import GeneralInfo from './GeneralInfo';
import SpecialAbilities from './SpecialAbilities';
import MonsterActions from './MonsterActions';
import MonsterLegendaryActions from './MonsterLegendaryActions';

//react-bootstrap components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

  
class MonsterModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          showSpecialAbilities: false,
          showMonsterActions: false,
          showMonstersLegendaryActions: false
        }
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
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: false, showMonsterActions: false, showMonstersLegendaryActions: false})}} disabled={!this.state.showSpecialAbilities && !this.state.showMonsterActions && !this.state.showMonstersLegendaryActions}>General Info</Button>
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: true, showMonsterActions: false, showMonstersLegendaryActions:false})}} disabled={this.state.showSpecialAbilities}>Special abilities</Button>
                                    <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showMonsterActions: true, showSpecialAbilities: false, showMonstersLegendaryActions: false})}} disabled={this.state.showMonsterActions}>Actions</Button>
                                    {this.props.monsterInfo && !_.isEmpty(this.props.monsterInfo.legendary_actions) && <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showMonstersLegendaryActions: true, showMonsterActions: false, showSpecialAbilities: false})}} disabled={this.state.showMonstersLegendaryActions}>Legendary Actions</Button>}
                                    </ButtonGroup>
                                </div>
                            </Row>
                        </Container>
                    </Modal.Header>
                    <Modal.Body>
                        {(!this.state.showSpecialAbilities && !this.state.showMonsterActions && !this.state.showMonstersLegendaryActions) && <GeneralInfo/>}
                        {this.state.showSpecialAbilities && <SpecialAbilities/>}
                        {this.state.showMonsterActions && <MonsterActions/>}
                        {this.state.showMonstersLegendaryActions && <MonsterLegendaryActions/>}
                    </Modal.Body>
                </Modal>}
} 

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      monsterInfo: state.monsterInfo
    };
}

export default connect(mapStateToProps, null)(MonsterModal);