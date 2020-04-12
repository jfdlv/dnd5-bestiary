import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {getMonsterSpellsAction} from '../../actions/index';
import {bindActionCreators} from 'redux';

//react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

class SpellList extends React.Component {
    
    state = {
        spellList: []
    }

    renderSpellDetails = (spellInfo) => {
        return (
            <Card.Body>
                <Container>
                    <Row className="info-row">
                        <Alert variant="info">
                            {spellInfo.desc}
                        </Alert>
                    </Row>
                    <Row className="info-row">
                        <Col>
                            <span className="title">School: </span><span>{spellInfo.school}</span>
                        </Col>
                        <Col>
                            <span className="title">Components: </span><span>{spellInfo.components}</span>
                        </Col>
                        <Col>
                            <span className="title">Range: </span><span>{spellInfo.range}</span>
                        </Col>
                    </Row>
                    <Row className="info-row">
                        <Col>
                            <span className="title">Duration: </span><span>{spellInfo.duration}</span>
                        </Col>
                        <Col>
                            <span className="title">Ritual: </span><span>{spellInfo.ritual}</span>
                        </Col>
                        <Col>
                            <span className="title">Concentration: </span><span>{spellInfo.concentration}</span>
                        </Col>
                    </Row>
                    <Row className="info-row">
                        <Col>
                            <span className="title">Casting Time: </span><span>{spellInfo.casting_time}</span>
                        </Col>
                    </Row>
                </Container>               
            </Card.Body>
        )
    }
    
    render() {
        console.log(this.props.monsterSpells);
        var eventKeyCounter = -1;

        if(_.isEmpty(this.props.monsterSpells)) {
            return <div style={{textAlign: "center"}}>
                <Spinner animation="grow"/>
            </div>
        }

        return <Accordion style={{marginTop: "10px"}}>
            {!_.isEmpty(this.props.monsterSpells) && this.props.monsterSpells.map((spell) => {
                eventKeyCounter++;
                return <Card key={spell.name}>
                <Accordion.Toggle as={Card.Header} eventKey={eventKeyCounter}>
                    <Row>
                        <Col style={{textAlign: "left"}}>
                            {spell.name}
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <span className="title">Level: </span>
                            <span>{spell.level_int}</span>
                        </Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKeyCounter}>
                  {this.renderSpellDetails(spell)}
                </Accordion.Collapse>
              </Card>
            })}
        </Accordion>
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      monsterInfo: state.monsterInfo,
      monsterSpells: state.monsterSpells
    };
  }

  function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({
        getMonsterSpellsAction
    }, 
      dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SpellList);