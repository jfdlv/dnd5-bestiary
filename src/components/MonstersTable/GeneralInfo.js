import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

import util from '../../util/util';

//react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BootstrapTable from 'react-bootstrap-table-next';

const monsterGeneralInfoTableColumns = [{
dataField:'_id',
text: "",
hidden: true
},{
dataField: 'size',
text: 'Size'
},{
dataField: 'type',
text: 'Type'
},{
dataField: 'alignment',
text: 'Alignment'
},{
dataField: 'armor_class',
text: 'AC'
},{
dataField: 'hit_points',
text: 'HP'
},{
dataField: 'hit_dice',
text: 'Hit dice'
},{
dataField: 'speed',
text:'Speed',
formatter: (cell,row,rowIndex) => {
    return <div className='multiple-values-container'>
    {cell.walk && <div><span>Walk: </span><span>{cell.walk}</span></div>}
    {cell.swim && <div><span>Swim: </span><span>{cell.swim}</span></div>}
    {cell.fly && <div><span>Fly: </span><span>{cell.fly}</span></div>}
    {cell.burrow && <div><span>Burrow: </span><span>{cell.burrow}</span></div>}

    </div>
}

}]
  
const monsterAbilityScoresAndModsColumns = [{
    dataField: 'strength',
    text: 'Strength',
    formatter: (cell) => {
        return cell && 
        <div className="ability-modifier-container">
            <div>
            <span>{util.abililityModCalculator(cell)}</span>
            </div>
            <div>
                <span>{cell}</span>
            </div>
        </div>
    }
    },{
    dataField: 'dexterity',
    text: 'Dexterity',
    formatter: (cell) => {
        return cell && 
        <div className="ability-modifier-container">
            <div>
            <span>{util.abililityModCalculator(cell)}</span>
            </div>
            <div>
                <span>{cell}</span>
            </div>
        </div>
    }
    },{
    dataField: 'constitution',
    text: 'Constitution',
    formatter: (cell) => {
        return cell && 
        <div className="ability-modifier-container">
            <div>
                <span>{util.abililityModCalculator(cell)}</span>
            </div>
            <div>
                <span>{cell}</span>
            </div>
        </div>
    }
    },{
    dataField: 'intelligence',
    text: 'Intelligence',
    formatter: (cell) => {
        return cell && 
        <div className="ability-modifier-container">
            <div>
            <span>{util.abililityModCalculator(cell)}</span>
            </div>
            <div>
                <span>{cell}</span>
            </div>
        </div>
    }
    },{
    dataField: 'wisdom',
    text: 'Wisdom',
    formatter: (cell) => {
        return cell && 
        <div className="ability-modifier-container">
            <div>
            <span>{util.abililityModCalculator(cell)}</span>
            </div>
            <div>
                <span>{cell}</span>
            </div>
        </div>
    }
    },{
    dataField: 'charisma',
    text: 'Charisma',
    formatter: (cell) => {
            return cell &&
            <div className="ability-modifier-container">
                <div>
                <span>{util.abililityModCalculator(cell)}</span>
                </div>
                <div>
                    <span>{cell}</span>
                </div>
            </div>
        }
    }
]

class GeneralInfo extends React.Component {

    renderMonsterGeneralInfo = () => {
        var data = [];
        data.push(this.props.monsterInfo);
        return (<React.Fragment>
            <BootstrapTable bootstrap4 keyField='name' columns={monsterGeneralInfoTableColumns} data={data}/>
        </React.Fragment>)
    }

    renderMonsterAbilityScoresAndMods = () => { 
        var data = [];
        data.push(this.props.monsterInfo);
        return (<React.Fragment>
        <BootstrapTable bootstrap4 keyField='name' columns={monsterAbilityScoresAndModsColumns} data={data}/>
        </React.Fragment>)
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
                    <h3 className="section-title">General info</h3>
                    {this.props.monsterInfo && this.renderMonsterGeneralInfo()}
                    
                    {this.props.monsterInfo && this.renderMonsterAbilityScoresAndMods()}

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