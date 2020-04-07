import React from 'react'

import {connect} from 'react-redux';

//react-bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

class MonsterActions extends React.Component {
    
    renderActionDescription(action) {
        console.log(action);
        return <React.Fragment>
            <Alert variant="info">
                        {action.desc}
            </Alert>
            <Row className="info-row">
                {action.attack_bonus && <span><span className="title">Attack Bonus: </span><span>{action.attack_bonus}</span></span>}
            </Row>
            {action.damage && action.damage.length > 0 && action.damage.map((element)=>{  return <Row key={element.damage_type.name}>
                <Col><span className="title">Damage Type: </span><span>{element.damage_type.name}</span></Col>
                <Col><span className="title">Damage Dice: </span><span>{element.damage_dice}</span></Col>
                <Col><span className="title">Damage Bonus: </span><span>{element.damage_bonus}</span></Col>
            </Row>})}
        </React.Fragment>
    }

    render() { 
        let monsterActions = this.props.monsterInfo ? this.props.monsterInfo.actions : null;
        let eventKeyCounter = -1;
        return(
            <Accordion defaultActiveKey="0">
                {
                    monsterActions && monsterActions.map((element) => {
                        eventKeyCounter++;
                        return <Card key={element.name}>
                                    <Accordion.Toggle as={Card.Header} eventKey={eventKeyCounter}>
                                        {element.name}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={eventKeyCounter}>
                                        <Card.Body>
                                        {this.renderActionDescription(element)}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>;       
                    })
                }    
            </Accordion>
        );
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      monsterInfo: state.monsterInfo
    };
}

export default connect(mapStateToProps, null)(MonsterActions);