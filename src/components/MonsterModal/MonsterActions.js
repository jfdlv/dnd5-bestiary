import React from 'react'

import {connect} from 'react-redux';

//react-bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

class MonsterActions extends React.Component {
    
    renderActionDescription(action) {
        console.log(action);
        return <React.Fragment>
            <Alert variant="info">
                        {action.desc}
            </Alert>
            <Container>
                <Row>
                    <Col>
                        {(action.attack_bonus || typeof action.attack_bonus == "number") && <div><span className="title">Attack Bonus: </span><span>{action.attack_bonus}</span></div>}
                        {action.damage_bonus && <div><span className="title">Damage Bonus: </span><span>{action.damage_bonus}</span></div>}
                        {action.damage_dice && <div><span className="title">Damage Dice: </span><span>{action.damage_dice}</span></div>}
                    </Col>
                </Row>
            </Container>
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