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

class GeneralInfo extends React.Component {

    renderMonsterGeneralInfo = () => {
        var data = [];
        data.push(this.props.monsterInfo);
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
            {this.props.monsterInfo.speed && 
                <Row className='general-info-row'>
                <span>
                <span className="title">Speed:</span> 
                {this.props.monsterInfo.speed.walk && <span><span> Walk: </span><span>{this.props.monsterInfo.speed.walk} </span></span>}
                {this.props.monsterInfo.speed.swim && <span><span>Swim: </span><span>{this.props.monsterInfo.speed.swim} </span></span>}
                {this.props.monsterInfo.speed.fly && <span><span>Fly: </span><span>{this.props.monsterInfo.speed.fly} </span></span>}
                {this.props.monsterInfo.speed.burrow && <span><span>Burrow: </span><span>{this.props.monsterInfo.speed.burrow} </span></span>}
                </span>
                </Row>}
            <hr/>
            <Row className="info-row">
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

    renderMonsterProficiencies = () => {
    
        var proficiencies = this.props.monsterInfo.proficiencies;
        
        var savingThrows = _.filter(proficiencies, (element)=>{
        return element.name.search("Saving Throw") > -1;
        })

        var skills = _.filter(proficiencies, (element) => {
        return element.name.search("Skill") > -1;
        })

        return (<Card.Body>
        {savingThrows.length > 0 && 
            <React.Fragment>
            <h5 className="underlined-title">Saving Throws</h5>
            <Row>
                {savingThrows.map((element)=>{
                return <Col key={element.name}>
                    <span className="title">{element.name.replace("Saving Throw:","")} </span>
                    <span>{element.value}</span>
                </Col>
                })}  
            </Row>
            </React.Fragment>      
        }
        {
            skills.length > 0 && <React.Fragment> 
            <h5 className="underlined-title">Skills</h5>
            <Row>
                {skills.map((element)=>{
                return <Col key={element.name}>
                    <span className="title">{element.name.replace("Skill:","")} </span>
                    <span>{element.value}</span>
                </Col>
                })}  
            </Row>   
            </React.Fragment>
        }
        <Row>
            {proficiencies.map((element)=>{
            return element.name.search("Saving Throw") === -1 && element.name.search("Skill") === -1 && <div><span className='title'>{element.name} </span><span className='proficiency-value'>{element.value}</span></div>
            })}
        </Row>
        </Card.Body>)
    }

    renderMonsterDmgProperties = () => {
        return <Card.Body>
        {this.props.monsterInfo.damage_vulnerabilities.length > 0 && <React.Fragment>
            <h5 className='dmg-property-title'>Vulnerabilities</h5>
            <ListGroup variant="flush">
            {this.props.monsterInfo.damage_vulnerabilities.map((element)=> {
                return <ListGroup.Item>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        {this.props.monsterInfo.damage_resistances.length > 0 && <React.Fragment>
            <h5 className='dmg-property-title'>Resistances</h5>
            <ListGroup variant="flush">
            {this.props.monsterInfo.damage_resistances.map((element)=> {
                return <ListGroup.Item>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        {this.props.monsterInfo.damage_immunities.length > 0 && <React.Fragment>
            <h5 className='dmg-property-title'>Immunities</h5>
            <ListGroup variant="flush">
            {this.props.monsterInfo.damage_immunities.map((element)=> {
                return <ListGroup.Item key={element}>{element}</ListGroup.Item>
            })}
            </ListGroup>
        </React.Fragment>}
        </Card.Body>
    } 

    renderConditionInmunities = () => {
        return <Card.Body>
            <ListGroup variant="flush">
            {this.props.monsterInfo.condition_immunities.map((element)=> {
                return <ListGroup.Item>{element.name}</ListGroup.Item>
            })}
            </ListGroup>
        </Card.Body>
    }
   
    renderMonsterSenses = () => {
        return <Card.Body>
        <ListGroup variant="flush">
        {
            _.map(this.props.monsterInfo.senses, (value,key) => {
            return <ListGroup.Item key={key}>
                <span className="title">{key.replace("_"," ")} </span><span>{value}</span>
            </ListGroup.Item>
            })
        }
        </ListGroup>
        </Card.Body>
    }

    render() {
        let languages = this.props.monsterInfo ? this.props.monsterInfo.languages.split(',') : "";
        return <React.Fragment>
                    {this.props.monsterInfo && this.renderMonsterGeneralInfo()}

                    {languages.length > 0 && <div className='languages-container'>
                    <h6>Languages</h6>
                    <Row> 
                    {
                        languages.map((element)=>{
                        return <Col key={element} md={3}><i className="fas fa-circle"/> {element}</Col>
                        })
                    }
                    </Row>
                    </div>}
                    
                    {this.props.monsterInfo &&
                    <Accordion>
                    { this.props.monsterInfo && this.props.monsterInfo.proficiencies.length > 0 &&
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Proficiencies
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            {this.renderMonsterProficiencies()}
                        </Accordion.Collapse>
                        </Card>
                    }
                    
                    {this.props.monsterInfo && (this.props.monsterInfo.damage_vulnerabilities.length > 0 || this.props.monsterInfo.damage_resistances.length > 0 || this.props.monsterInfo.damage_immunities.length > 0) && 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Vulnerabilities / Resistances / Inmunities
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        {this.renderMonsterDmgProperties()}
                        </Accordion.Collapse>
                    </Card>}
                    
                    {this.props.monsterInfo && this.props.monsterInfo.condition_immunities.length > 0 && 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Condition Immunities
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        {this.renderConditionInmunities()}
                        </Accordion.Collapse>
                    </Card>}

                    {this.props.monsterInfo.senses && !_.isEmpty(this.props.monsterInfo.senses) && 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        Senses
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        {this.renderMonsterSenses()}
                        </Accordion.Collapse>
                    </Card>}
                    </Accordion>}
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