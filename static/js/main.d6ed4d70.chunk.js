(this["webpackJsonpdnd-monster-guide"]=this["webpackJsonpdnd-monster-guide"]||[]).push([[0],{100:function(e,t,a){},163:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),c=a(14),o=a(25),i=a(86),m=(a(99),a(19)),u=a(20),p=a(22),d=a(23),E=(a(100),a(44)),f=a.n(E),h=a(66),v=a(67),g=a.n(v),y=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://www.dnd5eapi.co/api/monsters");case 2:(a=e.sent)&&t({type:"SET_ALL_MONSTERS",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://www.dnd5eapi.co".concat(e));case 2:(n=t.sent)&&a({type:"SET_MONSTER_INFO",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=a(35),w=a.n(M),I={abililityModCalculator:function(e){for(var t=-5,a=1;a<=e;a++)a%2===0&&t++;return t}},N=I,S=a(12),A=a(9),O=a(26),_=a(18),k=a(8),C=a(33),F=a.n(C),j=[{dataField:"_id",text:"",hidden:!0},{dataField:"size",text:"Size"},{dataField:"type",text:"Type"},{dataField:"alignment",text:"Alignment"},{dataField:"armor_class",text:"AC"},{dataField:"hit_points",text:"HP"},{dataField:"hit_dice",text:"Hit dice"},{dataField:"speed",text:"Speed",formatter:function(e,t,a){return l.a.createElement("div",{className:"multiple-values-container"},e.walk&&l.a.createElement("div",null,l.a.createElement("span",null,"Walk: "),l.a.createElement("span",null,e.walk)),e.swim&&l.a.createElement("div",null,l.a.createElement("span",null,"Swim: "),l.a.createElement("span",null,e.swim)),e.fly&&l.a.createElement("div",null,l.a.createElement("span",null,"Fly: "),l.a.createElement("span",null,e.fly)),e.burrow&&l.a.createElement("div",null,l.a.createElement("span",null,"Burrow: "),l.a.createElement("span",null,e.burrow)))}}],x=[{dataField:"strength",text:"Strength",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}},{dataField:"dexterity",text:"Dexterity",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}},{dataField:"constitution",text:"Constitution",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}},{dataField:"intelligence",text:"Intelligence",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}},{dataField:"wisdom",text:"Wisdom",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}},{dataField:"charisma",text:"Charisma",formatter:function(e){return e&&l.a.createElement("div",{className:"ability-modifier-container"},l.a.createElement("div",null,l.a.createElement("span",null,N.abililityModCalculator(e))),l.a.createElement("div",null,l.a.createElement("span",null,e)))}}],T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderMonsterGeneralInfo=function(){var t=[];return t.push(e.props.monsterInfo),l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{bootstrap4:!0,keyField:"name",columns:j,data:t}))},e.renderMonsterAbilityScoresAndMods=function(){var t=[];return t.push(e.props.monsterInfo),l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{bootstrap4:!0,keyField:"name",columns:x,data:t}))},e.renderMonsterProficiencies=function(){var t=e.props.monsterInfo.proficiencies,a=w.a.filter(t,(function(e){return e.name.search("Saving Throw")>-1})),n=w.a.filter(t,(function(e){return e.name.search("Skill")>-1}));return l.a.createElement(A.a.Body,null,a.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"underlined-title"},"Saving Throws"),l.a.createElement(_.a,null,a.map((function(e){return l.a.createElement(k.a,{key:e.name},l.a.createElement("span",{className:"title"},e.name.replace("Saving Throw:","")," "),l.a.createElement("span",null,e.value))})))),n.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"underlined-title"},"Skills"),l.a.createElement(_.a,null,n.map((function(e){return l.a.createElement(k.a,{key:e.name},l.a.createElement("span",{className:"title"},e.name.replace("Skill:","")," "),l.a.createElement("span",null,e.value))})))),l.a.createElement(_.a,null,t.map((function(e){return-1===e.name.search("Saving Throw")&&-1===e.name.search("Skill")&&l.a.createElement("div",null,l.a.createElement("span",{className:"title"},e.name," "),l.a.createElement("span",{className:"proficiency-value"},e.value))}))))},e.renderMonsterDmgProperties=function(){return l.a.createElement(A.a.Body,null,e.props.monsterInfo.damage_vulnerabilities.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"dmg-property-title"},"Vulnerabilities"),l.a.createElement(O.a,{variant:"flush"},e.props.monsterInfo.damage_vulnerabilities.map((function(e){return l.a.createElement(O.a.Item,null,e)})))),e.props.monsterInfo.damage_resistances.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"dmg-property-title"},"Resistances"),l.a.createElement(O.a,{variant:"flush"},e.props.monsterInfo.damage_resistances.map((function(e){return l.a.createElement(O.a.Item,null,e)})))),e.props.monsterInfo.damage_immunities.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"dmg-property-title"},"Immunities"),l.a.createElement(O.a,{variant:"flush"},e.props.monsterInfo.damage_immunities.map((function(e){return l.a.createElement(O.a.Item,{key:e},e)})))))},e.renderConditionInmunities=function(){return l.a.createElement(A.a.Body,null,l.a.createElement(O.a,{variant:"flush"},e.props.monsterInfo.condition_immunities.map((function(e){return l.a.createElement(O.a.Item,null,e.name)}))))},e.renderMonsterSenses=function(){return l.a.createElement(A.a.Body,null,l.a.createElement(O.a,{variant:"flush"},w.a.map(e.props.monsterInfo.senses,(function(e,t){return l.a.createElement(O.a.Item,{key:t},l.a.createElement("span",{className:"title"},t.replace("_"," ")," "),l.a.createElement("span",null,e))}))))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.monsterInfo?this.props.monsterInfo.languages.split(","):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"section-title"},"General info"),this.props.monsterInfo&&this.renderMonsterGeneralInfo(),this.props.monsterInfo&&this.renderMonsterAbilityScoresAndMods(),e.length>0&&l.a.createElement("div",{className:"languages-container"},l.a.createElement("h6",null,"Languages"),l.a.createElement(_.a,null,e.map((function(e){return l.a.createElement(k.a,{key:e,md:3},l.a.createElement("i",{className:"fas fa-circle"})," ",e)})))),this.props.monsterInfo&&l.a.createElement(S.a,null,this.props.monsterInfo&&this.props.monsterInfo.proficiencies.length>0&&l.a.createElement(A.a,null,l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:"0"},"Proficiencies"),l.a.createElement(S.a.Collapse,{eventKey:"0"},this.renderMonsterProficiencies())),this.props.monsterInfo&&(this.props.monsterInfo.damage_vulnerabilities.length>0||this.props.monsterInfo.damage_resistances.length>0||this.props.monsterInfo.damage_immunities.length>0)&&l.a.createElement(A.a,null,l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:"1"},"Vulnerabilities / Resistances / Inmunities"),l.a.createElement(S.a.Collapse,{eventKey:"1"},this.renderMonsterDmgProperties())),this.props.monsterInfo&&this.props.monsterInfo.condition_immunities.length>0&&l.a.createElement(A.a,null,l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:"2"},"Condition Immunities"),l.a.createElement(S.a.Collapse,{eventKey:"2"},this.renderConditionInmunities())),this.props.monsterInfo.senses&&!w.a.isEmpty(this.props.monsterInfo.senses)&&l.a.createElement(A.a,null,l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:"3"},"Senses"),l.a.createElement(S.a.Collapse,{eventKey:"3"},this.renderMonsterSenses()))))}}]),a}(l.a.Component);var D=Object(c.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(T),B=a(50),K=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderSpellCasting=function(e){var t=[{dataField:"name",text:"Name"},{dataField:"usage",text:"Usage",formatter:function(e){return e?e.times?l.a.createElement("span",null,l.a.createElement("span",null,e.times," "),l.a.createElement("span",null,e.type)):l.a.createElement("span",null,e.type):"--"}},{dataField:"level",text:"Level",formatter:function(e){return e||e>-1?e:"--"}}],a=e.components_required.length>0?w.a.toString(e.components_required):null;return l.a.createElement("div",null,l.a.createElement(_.a,{className:"info-row"},e.level&&l.a.createElement(k.a,null,l.a.createElement("span",{class:"title"},"Level: "),l.a.createElement("span",null,e.level)),e.ability&&l.a.createElement(k.a,null,l.a.createElement("span",{class:"title"},"Ability: "),l.a.createElement("span",null,e.ability.name)),e.dc&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"DC: "),l.a.createElement("span",null,e.dc)),e.modifier&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Modifier: "),l.a.createElement("span",null,e.modifier))),l.a.createElement(_.a,{className:"info-row"},e.school&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"School: "),l.a.createElement("span",null,e.school)),a&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Components Required: "),l.a.createElement("span",null,a))),l.a.createElement("h5",null,"Spells"),l.a.createElement(F.a,{keyField:"name",columns:t,data:e.spells}))},e.renderAbilityDescription=function(t){return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{variant:"info"},t.desc),t.spellcasting&&e.renderSpellCasting(t.spellcasting),l.a.createElement(_.a,null,t.dc&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"DC: "),l.a.createElement("span",null,"".concat(t.dc.dc_type.name," ").concat(t.dc.dc_value))),t.usage&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Usage: "),l.a.createElement("span",null,"".concat(t.usage.times?t.usage.times:""," ").concat(t.usage.type?t.usage.type:"")))))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.monsterInfo?this.props.monsterInfo.special_abilities:null,a=-1;return l.a.createElement(S.a,{defaultActiveKey:"0"},t&&t.map((function(t){return a++,l.a.createElement(A.a,{key:t.name},l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:a},t.name),l.a.createElement(S.a.Collapse,{eventKey:a},l.a.createElement(A.a.Body,null,e.renderAbilityDescription(t))))})))}}]),a}(l.a.Component);var H=Object(c.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(K),R=a(53),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderActionDescription",value:function(e){return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{variant:"info"},e.desc),l.a.createElement(R.a,null,l.a.createElement(_.a,null,e.attack_bonus&&l.a.createElement("div",null,l.a.createElement("span",{className:"title"},"Attack Bonus: "),l.a.createElement("span",null,e.attack_bonus))),e.dc&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"DC"),l.a.createElement(_.a,{className:"info-with-title-row"},l.a.createElement(k.a,{md:"4"},l.a.createElement("span",null,l.a.createElement("span",{className:"title"},"Type: "),l.a.createElement("span",null,e.dc.dc_type.name))),l.a.createElement(k.a,{md:"4"},l.a.createElement("span",null,l.a.createElement("span",{className:"title"},"value: "),l.a.createElement("span",null,e.dc.dc_value))),l.a.createElement(k.a,{md:"4"},l.a.createElement("span",null,l.a.createElement("span",{className:"title"},"Success Type: "),l.a.createElement("span",null,e.dc.success_type)))))),e.damage&&l.a.createElement("h6",null,"Damage"),e.damage&&e.damage.length>0&&e.damage.map((function(e){return l.a.createElement(_.a,{className:"info-with-title-row",key:e.damage_type?e.damage_type.name:e.type},e.damage_type&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Type: "),l.a.createElement("span",null,e.damage_type.name)),e.damage_dice&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Dice: "),l.a.createElement("span",null,e.damage_dice)),(e.damage_bonus||"number"==typeof e.damage_bonus)&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Bonus: "),l.a.createElement("span",null,e.damage_bonus)),e.type&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Type: "),l.a.createElement("span",null,e.type)),e.dice&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Dice: "),l.a.createElement("span",null,e.dice)),(e.bonus||"number"==typeof e.bonus)&&l.a.createElement(k.a,null,l.a.createElement("span",{className:"title"},"Damage Bonus: "),l.a.createElement("span",null,e.bonus)))})))}},{key:"render",value:function(){var e=this,t=this.props.monsterInfo?this.props.monsterInfo.actions:null,a=-1;return l.a.createElement(S.a,{defaultActiveKey:"0"},t&&t.map((function(t){return a++,l.a.createElement(A.a,{key:t.name},l.a.createElement(S.a.Toggle,{as:A.a.Header,eventKey:a},t.name),l.a.createElement(S.a.Collapse,{eventKey:a},l.a.createElement(A.a.Body,null,e.renderActionDescription(t))))})))}}]),a}(l.a.Component);var P=Object(c.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(L),G=a(56),W=a(55),q=a(88),z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={showSpecialAbilities:!1,showMonsterActions:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(G.a,{show:this.props.showMonsterModal,onHide:this.props.handleMonsterModalClose,size:"lg",className:"search-modal"},l.a.createElement(G.a.Header,{closeButton:!0},l.a.createElement("div",{className:"monster-name-cr-container"},l.a.createElement("div",{className:"buttons-container"},l.a.createElement(q.a,null,l.a.createElement(W.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showSpecialAbilities:!1,showMonsterActions:!1})},disabled:!this.state.showSpecialAbilities&&!this.state.showMonsterActions},"General Info"),l.a.createElement(W.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showSpecialAbilities:!0,showMonsterActions:!1})},disabled:this.state.showSpecialAbilities},"Special abilities"),l.a.createElement(W.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showMonsterActions:!0,showSpecialAbilities:!1})},disabled:this.state.showMonsterActions},"Actions"))),l.a.createElement("div",{className:"monster-name"},this.props.monsterInfo?this.props.monsterInfo.name:""),l.a.createElement("div",{className:"monster-cr"},"CR ",this.props.monsterInfo?this.props.monsterInfo.challenge_rating:"--"))),l.a.createElement(G.a.Body,null,!this.state.showSpecialAbilities&&!this.state.showMonsterActions&&l.a.createElement(D,null),this.state.showSpecialAbilities&&l.a.createElement(H,null),this.state.showMonsterActions&&l.a.createElement(P,null)))}}]),a}(l.a.Component);var J=Object(c.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(z),U=a(68),V=a.n(U),$=(a(163),[{dataField:"name",text:"Monster Name",filter:Object(U.textFilter)()}]),Q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleMonsterModalOpen=function(){n.setState({showMonsterModal:!0})},n.handleMonsterModalClose=function(){n.setState({showMonsterModal:!1})},n.rowEvents={onClick:function(e,t){n.props.getMonsterInfoAction(t.url),n.handleMonsterModalOpen()}},n.state={showMonsterModal:!1,showSpecialFeatures:!1,showMonsterActions:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllMonstersAction()}},{key:"render",value:function(){return l.a.createElement(R.a,null,this.props.allMonsters&&l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{bootstrap4:!0,keyField:"name",data:this.props.allMonsters,columns:$,filter:V()(),rowEvents:this.rowEvents}),l.a.createElement(J,{handleMonsterModalClose:this.handleMonsterModalClose,showMonsterModal:this.state.showMonsterModal})))}}]),a}(l.a.Component);var X=Object(c.b)((function(e){return{allMonsters:e.allMonsters,monsterInfo:e.monsterInfo}}),(function(e){return Object(o.b)({getAllMonstersAction:y,getMonsterInfoAction:b},e)}))(Q),Y=(a(164),a(165),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllMonstersAction()}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"50px"}},l.a.createElement(X,null))}}]),a}(l.a.Component));var Z=Object(c.b)((function(e){return{allMonsters:e.allMonsters}}),(function(e){return Object(o.b)({getAllMonstersAction:y},e)}))(Y),ee=Object(o.c)({allMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_MONSTERS":return t.payload;default:return e}},monsterInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MONSTER_INFO":return t.payload;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=Object(o.d)(ee,Object(o.a)(i.a));s.a.render(l.a.createElement(c.a,{store:te},l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(166)},99:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.d6ed4d70.chunk.js.map