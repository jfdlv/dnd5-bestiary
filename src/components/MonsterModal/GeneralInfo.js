import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

import util from '../../util/util';

//react-bootstrap components
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./GeneralInfo.css";

class GeneralInfo extends React.Component {

    renderMonsterGeneralInfo = () => {
        
        let languages = this.props.monsterInfo ? this.props.monsterInfo.languages.split(',') : "";

        return (<Container>
            {/* <BootstrapTable bootstrap4 keyField='name' columns={monsterGeneralInfoTableColumns} data={data}/> */}
            <Row className='general-info-row'>
                { this.props.monsterInfo.size && <Col><span className="title">Size: </span><span>{this.props.monsterInfo.size}</span></Col>}
                { this.props.monsterInfo.type && <Col><span className="title">Type: </span><span>{this.props.monsterInfo.type}</span></Col>}
                { this.props.monsterInfo.alignment && <Col><span className="title">Alignment: </span><span>{this.props.monsterInfo.alignment}</span></Col>}
            </Row>
            <Row className='general-info-row'>
                { this.props.monsterInfo.armor_class && <Col><span className="title">AC: </span><span>{this.props.monsterInfo.armor_class}</span></Col>}
                { this.props.monsterInfo.hit_points && <Col><span className="title">HP: </span><span>{this.props.monsterInfo.armor_class}</span></Col>}
                { this.props.monsterInfo.hit_dice && <Col><span className="title">Hit Dice: </span><span>{this.props.monsterInfo.hit_dice}</span></Col>}
            </Row>
            
            <Row className='general-info-row'>
                {this.props.monsterInfo.speed && 
                    <Col>
                    <span>
                    <span className="title">Speed:</span> 
                    {this.props.monsterInfo.speed.walk && <span><span> Walk: </span><span>{this.props.monsterInfo.speed.walk} </span></span>}
                    {this.props.monsterInfo.speed.swim && <span><span>Swim: </span><span>{this.props.monsterInfo.speed.swim} </span></span>}
                    {this.props.monsterInfo.speed.fly && <span><span>Fly: </span><span>{this.props.monsterInfo.speed.fly} </span></span>}
                    {this.props.monsterInfo.speed.burrow && <span><span>Burrow: </span><span>{this.props.monsterInfo.speed.burrow} </span></span>}
                    </span>
                    </Col>}
                
                {languages.length > 0 && <Col>
                    <span className="title">
                        Languages:
                    </span>
                    {languages.map((language)=>{
                        return <span key={language}>&nbsp;{language}</span>
                    })}
                </Col>}

                {this.props.monsterInfo.perception && <Col>
                    <span className="title">Perception: </span>
                    <span>{this.props.monsterInfo.perception}</span>        
                </Col>}
            </Row>
            
            <hr/>
            <Row className="info-row" xs={3} md={6}>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.strength)}</div>
                    <div className="ability-score">{this.props.monsterInfo.strength}</div>
                    <div className="title-ability">STR</div>
                </Col>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.dexterity)}</div>
                    <div className="ability-score">{this.props.monsterInfo.dexterity}</div>
                    <div className="title-ability">DEX</div>
                </Col>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.constitution)}</div>
                    <div className="ability-score">{this.props.monsterInfo.constitution}</div>
                    <div className="title-ability">CON</div>
                </Col>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.intelligence)}</div>
                    <div className="ability-score">{this.props.monsterInfo.intelligence}</div>
                    <div className="title-ability">INT</div>
                </Col>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.wisdom)}</div>
                    <div className="ability-score">{this.props.monsterInfo.wisdom}</div>
                    <div className="title-ability">WIS</div>
                </Col>
                <Col>
                    <div className="ability-mod">{util.abililityModCalculator(this.props.monsterInfo.charisma)}</div>
                    <div className="ability-score">{this.props.monsterInfo.charisma}</div>
                    <div className="title-ability">CHAR</div>
                </Col>
            </Row>
            
            
        </Container>)
    }

    renderMonsterDmgProperties = () => {
        var damage_vulnerabilities = this.props.monsterInfo.damage_vulnerabilities.split(",");
        var damage_resistances = this.props.monsterInfo.damage_resistances.split(",");
        var damage_immunities = this.props.monsterInfo.damage_immunities.split(",");
        var condition_immunities = this.props.monsterInfo.condition_immunities.split(',');

        return <Card.Body>
        {!_.isEmpty(damage_vulnerabilities[0]) && <React.Fragment>
            <h5 className='dmg-property-title'>Vulnerabilities</h5>
            <ListGroup variant="flush">
            {damage_vulnerabilities.map((element)=> {
                return <ListGroup.Item key={element}>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        {!_.isEmpty(damage_resistances[0]) && <React.Fragment>
            <h5 className='dmg-property-title'>Resistances</h5>
            <ListGroup variant="flush">
            {damage_resistances.map((element)=> {
                return <ListGroup.Item key={element}>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        {!_.isEmpty(damage_immunities[0]) && <React.Fragment>
            <h5 className='dmg-property-title'>Immunities</h5>
            <ListGroup variant="flush">
            {damage_immunities.map((element)=> {
                return <ListGroup.Item key={element}>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        {!_.isEmpty(condition_immunities[0]) && <React.Fragment>
            <h5 className='dmg-property-title'>Condition Immunities</h5>
            <ListGroup variant="flush">
            {condition_immunities.map((element)=> {
                return <ListGroup.Item key={element}>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        </Card.Body>
    } 

    renderMonsterSenses = () => {
        var senses = this.props.monsterInfo ? this.props.monsterInfo.senses.split(',') : "";
        return <Card.Body>
        <ListGroup variant="flush">
        {
            senses.map((element) => {
            return <ListGroup.Item key={element}>
                <span>{element} </span>
            </ListGroup.Item>
            })
        }
        </ListGroup>
        </Card.Body>
    }

    render() {
        var savingThrows = {}; 

        if(this.props.monsterInfo) {
            ["strength_save","dexterity_save","constitution_save","intelligence_save","wisdom_save","charisma_save"].map((save_id) => {
                if(this.props.monsterInfo[save_id]){
                    savingThrows[save_id] = this.props.monsterInfo[save_id];
                }
                return null;
            });
        }

        return <React.Fragment>
                    {this.props.monsterInfo && this.renderMonsterGeneralInfo()}

                    {!_.isEmpty(savingThrows) && 
                    <Container>
                    <h5 className="underlined-title">Saving Throws</h5>
                    <Row className='info-row'>
                        {_.map(savingThrows,(value, name)=>{
                        if(value){
                            return <Col key={name}>
                                <span className="title">{`${util.lookup[name.replace("_save","")]}: `}</span>
                                <span>{value}</span>
                            </Col>
                        }
                        })}  
                    </Row>
                    </Container>}

                    {this.props.monsterInfo && !_.isEmpty(this.props.monsterInfo.skills) && <Container> 
                                <h5 className="underlined-title">Skills</h5>
                                <Row className="info-row">
                                    {_.map(this.props.monsterInfo.skills,(value, name)=>{
                                    return <Col key={name}>
                                        <span className="title">{`${name}: `}</span>
                                        <span>{value}</span>
                                    </Col>
                                    })}  
                                </Row>   
                                </Container>}
                    <Accordion>
                    {this.props.monsterInfo && (this.props.monsterInfo.damage_vulnerabilities || this.props.monsterInfo.damage_resistances || this.props.monsterInfo.damage_immunities) && 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Vulnerabilities / Resistances / Inmunities
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        {this.renderMonsterDmgProperties()}
                        </Accordion.Collapse>
                    </Card>}

                    {this.props.monsterInfo && !_.isEmpty(this.props.monsterInfo.senses) && 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Senses
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        {this.renderMonsterSenses()}
                        </Accordion.Collapse>
                    </Card>}
                    </Accordion>
                </React.Fragment>
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList.
    return {
      monsterInfo: state.monsterInfo
    };
}

export default connect(mapStateToProps, null)(GeneralInfo);