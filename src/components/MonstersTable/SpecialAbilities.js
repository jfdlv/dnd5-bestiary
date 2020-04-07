import React from 'react'
import _ from 'lodash';

import {connect} from 'react-redux';

//react-bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import BootstrapTable from 'react-bootstrap-table-next';

class SpecialAbilities extends React.Component {

    renderSpellCasting = (spellcasting) => {
        const spellsColumns = [{
            dataField: 'name',
            text: "Name"
        },{
            dataField: 'usage',
            text: "Usage",
            formatter: (cell) => {
                if(cell){
                    return  cell.times ? <span><span>{cell.times} </span><span>{cell.type}</span></span> : <span>{cell.type}</span>;
                }
                return "--";
            }
        },{
            dataField: 'level',
            text: "Level",
            formatter: (cell) => {
                if(cell  || cell > -1) {
                    return cell;
                }
                return "--";
            }
        }]

        let componentsRequired = spellcasting.components_required.length > 0 ? _.toString(spellcasting.components_required) : null;

        return <div>
            <Row className="info-row">
                {spellcasting.level && <Col><span class='title'>Level: </span><span>{spellcasting.level}</span></Col>}
                {spellcasting.ability && <Col><span class='title'>Ability: </span><span>{spellcasting.ability.name}</span></Col>}
                {spellcasting.dc && <Col><span className="title">DC: </span><span>{spellcasting.dc}</span></Col>}
                {spellcasting.modifier && <Col><span className="title">Modifier: </span><span>{spellcasting.modifier}</span></Col>}  
            </Row>
            <Row className="info-row">
                {spellcasting.school && <Col><span className="title">School: </span><span>{spellcasting.school}</span></Col>}  
                {componentsRequired && <Col><span className="title">Components Required: </span><span>{componentsRequired}</span></Col>}     
            </Row>
            <h5>Spells</h5>    
            <BootstrapTable keyField='name' columns={spellsColumns} data={spellcasting.spells}/>
        </div>;
    }

    renderAbilityDescription = (ability) => {
        console.log(ability);
        return <React.Fragment>
                    <Alert variant="info">
                        {ability.desc}
                    </Alert>
                    {ability.spellcasting && this.renderSpellCasting(ability.spellcasting)}
                    <Row>
                        {ability.dc && <Col><span className="title">DC: </span><span>{`${ability.dc.dc_type.name} ${ability.dc.dc_value}`}</span></Col>}
                        {ability.usage && <Col><span className="title">Usage: </span><span>{`${ability.usage.times ? ability.usage.times : ""} ${ability.usage.type ? ability.usage.type : ""}`}</span></Col>}
                    </Row> 
                </React.Fragment>;
    }

    render() { 
        let specialAbilities = this.props.monsterInfo ? this.props.monsterInfo.special_abilities : null;
        let eventKeyCounter = -1;
        return(
            <Accordion defaultActiveKey="0">
                {
                    specialAbilities && specialAbilities.map((element) => {
                        eventKeyCounter++;
                        return <Card key={element.name}>
                                    <Accordion.Toggle as={Card.Header} eventKey={eventKeyCounter}>
                                        {element.name}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={eventKeyCounter}>
                                        <Card.Body>
                                        {this.renderAbilityDescription(element)}
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

export default connect(mapStateToProps, null)(SpecialAbilities);
