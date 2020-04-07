import React from 'react';

import {connect} from 'react-redux';

//my components
import GeneralInfo from './GeneralInfo';
import SpecialAbilities from './SpecialAbilities';
import MonsterActions from './MonsterActions';

//react-bootstrap components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

  
class MonsterModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          showSpecialAbilities: false,
          showMonsterActions: false
        }
    }

    render() {
        return <Modal show={this.props.showMonsterModal} onHide={this.props.handleMonsterModalClose} size={"lg"} className="search-modal">
                    <Modal.Header closeButton>
                        <div className="monster-name-cr-container">
                        <div className="buttons-container">
                            <ButtonGroup>
                            <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: false, showMonsterActions: false})}} disabled={!this.state.showSpecialAbilities && !this.state.showMonsterActions}>General Info</Button>
                            <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showSpecialAbilities: true, showMonsterActions: false})}} disabled={this.state.showSpecialAbilities}>Special abilities</Button>
                            <Button className="menu-button" variant="secondary" onClick={()=>{this.setState({showMonsterActions: true, showSpecialAbilities: false})}} disabled={this.state.showMonsterActions}>Actions</Button>
                            </ButtonGroup>
                        </div>
                        <div className="monster-name">
                            {this.props.monsterInfo ? this.props.monsterInfo.name : ""}
                        </div>
                        <div className="monster-cr">
                            CR {this.props.monsterInfo ? this.props.monsterInfo.challenge_rating : "--"}
                        </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        {(!this.state.showSpecialAbilities && !this.state.showMonsterActions) && <GeneralInfo/>}
                        {this.state.showSpecialAbilities && <SpecialAbilities/>}
                        {this.state.showMonsterActions && <MonsterActions/>}
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