(this["webpackJsonpdnd-monster-guide"]=this["webpackJsonpdnd-monster-guide"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},120:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),l=a.n(r),o=a(15),c=a(22),i=a(86),m=(a(100),a(16)),p=a(17),u=a(18),E=a(19),d=a(10),f=a.n(d),h=(a(101),a(34)),y=a.n(h),g=a(47),v=a(38),b=a.n(v),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(g.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="",!e){t.next=7;break}return t.next=4,b.a.get(e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,b.a.get("https://api.open5e.com/monsters");case 9:n=t.sent;case 10:n&&a({type:"SET_PAGE_MONSTERS",payload:n.data});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.open5e.com/monsters/?search=".concat(e));case 2:(n=t.sent)&&a({type:"SET_PAGE_MONSTERS",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.open5e.com/monsters/".concat(e));case 2:(n=t.sent)&&a({type:"SET_MONSTER_INFO",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(a){var n,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],s=[],e.map((function(e){return n.push(b.a.get(e)),null})),t.next=5,b.a.all(n);case 5:return t.sent.map((function(e){return s.push(e.data),null})),a({type:"SET_MONSTER_SPELLS",payload:s}),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return console.log(e),function(t){t({type:"SET_SESSION_MONSTERS",payload:e})}},A={abililityModCalculator:function(e){for(var t=-5,a=1;a<=e;a++)a%2===0&&t++;return t},lookup:{strength:"STR",dexterity:"DEX",constitution:"CON",intelligence:"INT",wisdom:"WIS",charisma:"CHA"}},O=A,k=a(20),_=a(13),C=a(11),j=a(29),T=a(7),x=a(5),F=(a(120),function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderMonsterGeneralInfo=function(){var t=e.props.monsterInfo?e.props.monsterInfo.languages.split(","):"";return s.a.createElement(k.a,null,s.a.createElement(T.a,{className:"general-info-row"},e.props.monsterInfo.size&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Size: "),s.a.createElement("span",null,e.props.monsterInfo.size)),e.props.monsterInfo.type&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Type: "),s.a.createElement("span",null,e.props.monsterInfo.type)),e.props.monsterInfo.alignment&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Alignment: "),s.a.createElement("span",null,e.props.monsterInfo.alignment))),s.a.createElement(T.a,{className:"general-info-row"},e.props.monsterInfo.armor_class&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"AC: "),s.a.createElement("span",null,e.props.monsterInfo.armor_class)),e.props.monsterInfo.hit_points&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"HP: "),s.a.createElement("span",null,e.props.monsterInfo.armor_class)),e.props.monsterInfo.hit_dice&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Hit Dice: "),s.a.createElement("span",null,e.props.monsterInfo.hit_dice))),s.a.createElement(T.a,{className:"general-info-row"},e.props.monsterInfo.speed&&s.a.createElement(x.a,null,s.a.createElement("span",null,s.a.createElement("span",{className:"title"},"Speed:"),e.props.monsterInfo.speed.walk&&s.a.createElement("span",null,s.a.createElement("span",null," Walk: "),s.a.createElement("span",null,e.props.monsterInfo.speed.walk," ")),e.props.monsterInfo.speed.swim&&s.a.createElement("span",null,s.a.createElement("span",null,"Swim: "),s.a.createElement("span",null,e.props.monsterInfo.speed.swim," ")),e.props.monsterInfo.speed.fly&&s.a.createElement("span",null,s.a.createElement("span",null,"Fly: "),s.a.createElement("span",null,e.props.monsterInfo.speed.fly," ")),e.props.monsterInfo.speed.burrow&&s.a.createElement("span",null,s.a.createElement("span",null,"Burrow: "),s.a.createElement("span",null,e.props.monsterInfo.speed.burrow," ")))),t.length>0&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Languages:"),t.map((function(e){return s.a.createElement("span",{key:e},"\xa0",e)}))),e.props.monsterInfo.perception&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Perception: "),s.a.createElement("span",null,e.props.monsterInfo.perception))),s.a.createElement("hr",null),s.a.createElement(T.a,{className:"info-row",xs:3,md:6},s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.strength)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.strength),s.a.createElement("div",{className:"title-ability"},"STR")),s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.dexterity)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.dexterity),s.a.createElement("div",{className:"title-ability"},"DEX")),s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.constitution)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.constitution),s.a.createElement("div",{className:"title-ability"},"CON")),s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.intelligence)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.intelligence),s.a.createElement("div",{className:"title-ability"},"INT")),s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.wisdom)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.wisdom),s.a.createElement("div",{className:"title-ability"},"WIS")),s.a.createElement(x.a,null,s.a.createElement("div",{className:"ability-mod"},O.abililityModCalculator(e.props.monsterInfo.charisma)),s.a.createElement("div",{className:"ability-score"},e.props.monsterInfo.charisma),s.a.createElement("div",{className:"title-ability"},"CHAR"))))},e.renderMonsterDmgProperties=function(){var t=e.props.monsterInfo.damage_vulnerabilities.split(","),a=e.props.monsterInfo.damage_resistances.split(","),n=e.props.monsterInfo.damage_immunities.split(","),r=e.props.monsterInfo.condition_immunities.split(",");return s.a.createElement(C.a.Body,null,!f.a.isEmpty(t[0])&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:"dmg-property-title"},"Vulnerabilities"),s.a.createElement(j.a,{variant:"flush"},t.map((function(e){return s.a.createElement(j.a.Item,{key:e},e)})))),!f.a.isEmpty(a[0])&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:"dmg-property-title"},"Resistances"),s.a.createElement(j.a,{variant:"flush"},a.map((function(e){return s.a.createElement(j.a.Item,{key:e},e)})))),!f.a.isEmpty(n[0])&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:"dmg-property-title"},"Immunities"),s.a.createElement(j.a,{variant:"flush"},n.map((function(e){return s.a.createElement(j.a.Item,{key:e},e)})))),!f.a.isEmpty(r[0])&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:"dmg-property-title"},"Condition Immunities"),s.a.createElement(j.a,{variant:"flush"},r.map((function(e){return s.a.createElement(j.a.Item,{key:e},e)})))))},e.renderMonsterSenses=function(){var t=e.props.monsterInfo?e.props.monsterInfo.senses.split(","):"";return s.a.createElement(C.a.Body,null,s.a.createElement(j.a,{variant:"flush"},t.map((function(e){return s.a.createElement(j.a.Item,{key:e},s.a.createElement("span",null,e," "))}))))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t={};return this.props.monsterInfo&&["strength_save","dexterity_save","constitution_save","intelligence_save","wisdom_save","charisma_save"].map((function(a){return e.props.monsterInfo[a]&&(t[a]=e.props.monsterInfo[a]),null})),s.a.createElement(s.a.Fragment,null,this.props.monsterInfo&&this.renderMonsterGeneralInfo(),!f.a.isEmpty(t)&&s.a.createElement(k.a,null,s.a.createElement("h5",{className:"underlined-title"},"Saving Throws"),s.a.createElement(T.a,{className:"info-row"},f.a.map(t,(function(e,t){if(e)return s.a.createElement(x.a,{key:t},s.a.createElement("span",{className:"title"},"".concat(O.lookup[t.replace("_save","")],": ")),s.a.createElement("span",null,e))})))),this.props.monsterInfo&&!f.a.isEmpty(this.props.monsterInfo.skills)&&s.a.createElement(k.a,null,s.a.createElement("h5",{className:"underlined-title"},"Skills"),s.a.createElement(T.a,{className:"info-row"},f.a.map(this.props.monsterInfo.skills,(function(e,t){return s.a.createElement(x.a,{key:t},s.a.createElement("span",{className:"title"},"".concat(t,": ")),s.a.createElement("span",null,e))})))),s.a.createElement(_.a,null,this.props.monsterInfo&&(this.props.monsterInfo.damage_vulnerabilities||this.props.monsterInfo.damage_resistances||this.props.monsterInfo.damage_immunities)&&s.a.createElement(C.a,null,s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:"0"},"Vulnerabilities / Resistances / Inmunities"),s.a.createElement(_.a.Collapse,{eventKey:"0"},this.renderMonsterDmgProperties())),this.props.monsterInfo&&!f.a.isEmpty(this.props.monsterInfo.senses)&&s.a.createElement(C.a,null,s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:"1"},"Senses"),s.a.createElement(_.a.Collapse,{eventKey:"1"},this.renderMonsterSenses()))))}}]),a}(s.a.Component));var D=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(F),B=a(31),P=a(39),L=a.n(P),R=function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderSpellCasting=function(e){var t=[{dataField:"name",text:"Name"},{dataField:"usage",text:"Usage",formatter:function(e){return e?e.times?s.a.createElement("span",null,s.a.createElement("span",null,e.times," "),s.a.createElement("span",null,e.type)):s.a.createElement("span",null,e.type):"--"}},{dataField:"level",text:"Level",formatter:function(e){return e||e>-1?e:"--"}}],a=e.components_required.length>0?f.a.toString(e.components_required):null;return s.a.createElement("div",null,s.a.createElement(T.a,{className:"info-row"},e.level&&s.a.createElement(x.a,null,s.a.createElement("span",{class:"title"},"Level: "),s.a.createElement("span",null,e.level)),e.ability&&s.a.createElement(x.a,null,s.a.createElement("span",{class:"title"},"Ability: "),s.a.createElement("span",null,e.ability.name)),e.dc&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"DC: "),s.a.createElement("span",null,e.dc)),e.modifier&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Modifier: "),s.a.createElement("span",null,e.modifier))),s.a.createElement(T.a,{className:"info-row"},e.school&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"School: "),s.a.createElement("span",null,e.school)),a&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Components Required: "),s.a.createElement("span",null,a))),s.a.createElement("h5",null,"Spells"),s.a.createElement(L.a,{keyField:"name",columns:t,data:e.spells}))},e.renderAbilityDescription=function(t){return console.log(t),s.a.createElement(s.a.Fragment,null,s.a.createElement(B.a,{variant:"info"},t.desc),t.spellcasting&&e.renderSpellCasting(t.spellcasting),s.a.createElement(T.a,null,t.dc&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"DC: "),s.a.createElement("span",null,"".concat(t.dc.dc_type.name," ").concat(t.dc.dc_value))),t.usage&&s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Usage: "),s.a.createElement("span",null,"".concat(t.usage.times?t.usage.times:""," ").concat(t.usage.type?t.usage.type:"")))))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.monsterInfo?this.props.monsterInfo.special_abilities:null,a=-1;return s.a.createElement(_.a,{defaultActiveKey:"0"},t&&t.map((function(t){return a++,s.a.createElement(C.a,{key:t.name},s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:a},t.name),s.a.createElement(_.a.Collapse,{eventKey:a},s.a.createElement(C.a.Body,null,e.renderAbilityDescription(t))))})))}}]),a}(s.a.Component);var K=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(R),H=function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderActionDescription",value:function(e){return console.log(e),s.a.createElement(s.a.Fragment,null,s.a.createElement(B.a,{variant:"info"},e.desc),s.a.createElement(k.a,null,s.a.createElement(T.a,null,s.a.createElement(x.a,null,(e.attack_bonus||"number"==typeof e.attack_bonus)&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Attack Bonus: "),s.a.createElement("span",null,e.attack_bonus)),e.damage_bonus&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Damage Bonus: "),s.a.createElement("span",null,e.damage_bonus)),e.damage_dice&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Damage Dice: "),s.a.createElement("span",null,e.damage_dice))))))}},{key:"render",value:function(){var e=this,t=this.props.monsterInfo?this.props.monsterInfo.actions:null,a=-1;return s.a.createElement(_.a,{defaultActiveKey:"0"},t&&t.map((function(t){return a++,s.a.createElement(C.a,{key:t.name},s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:a},t.name),s.a.createElement(_.a.Collapse,{eventKey:a},s.a.createElement(C.a.Body,null,e.renderActionDescription(t))))})))}}]),a}(s.a.Component);var G=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(H),J=function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderActionDescription",value:function(e){return console.log(e),s.a.createElement(s.a.Fragment,null,s.a.createElement(B.a,{variant:"info"},e.desc),s.a.createElement(k.a,null,s.a.createElement(T.a,null,s.a.createElement(x.a,null,(e.attack_bonus||"number"==typeof e.attack_bonus)&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Attack Bonus: "),s.a.createElement("span",null,e.attack_bonus)),e.damage_bonus&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Damage Bonus: "),s.a.createElement("span",null,e.damage_bonus)),e.damage_dice&&s.a.createElement("div",null,s.a.createElement("span",{className:"title"},"Damage Dice: "),s.a.createElement("span",null,e.damage_dice))))))}},{key:"render",value:function(){var e=this,t=this.props.monsterInfo?this.props.monsterInfo.legendary_actions:null,a=-1;return s.a.createElement(k.a,null,s.a.createElement(T.a,null,this.props.monsterInfo&&""!==this.props.monsterInfo.legendary_desc&&s.a.createElement(B.a,{variant:"info"},this.props.monsterInfo.legendary_desc)),s.a.createElement(_.a,{defaultActiveKey:"0"},"object"===typeof t&&!f.a.isEmpty(t)&&t.map((function(t){return a++,s.a.createElement(C.a,{key:t.name},s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:a},t.name),s.a.createElement(_.a.Collapse,{eventKey:a},s.a.createElement(C.a.Body,null,e.renderActionDescription(t))))}))))}}]),a}(s.a.Component);var W=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo}}),null)(J),z=a(88),q=function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={spellList:[]},e.renderSpellDetails=function(e){return s.a.createElement(C.a.Body,null,s.a.createElement(k.a,null,s.a.createElement(T.a,{className:"info-row"},s.a.createElement(B.a,{variant:"info"},e.desc)),s.a.createElement(T.a,{className:"info-row"},s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"School: "),s.a.createElement("span",null,e.school)),s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Components: "),s.a.createElement("span",null,e.components)),s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Range: "),s.a.createElement("span",null,e.range))),s.a.createElement(T.a,{className:"info-row"},s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Duration: "),s.a.createElement("span",null,e.duration)),s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Ritual: "),s.a.createElement("span",null,e.ritual)),s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Concentration: "),s.a.createElement("span",null,e.concentration))),s.a.createElement(T.a,{className:"info-row"},s.a.createElement(x.a,null,s.a.createElement("span",{className:"title"},"Casting Time: "),s.a.createElement("span",null,e.casting_time)))))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.monsterSpells);var t=-1;return f.a.isEmpty(this.props.monsterSpells)?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(z.a,{animation:"grow"})):s.a.createElement(_.a,{style:{marginTop:"10px"}},!f.a.isEmpty(this.props.monsterSpells)&&this.props.monsterSpells.map((function(a){return t++,s.a.createElement(C.a,{key:a.name},s.a.createElement(_.a.Toggle,{as:C.a.Header,eventKey:t},s.a.createElement(T.a,null,s.a.createElement(x.a,{style:{textAlign:"left"}},a.name),s.a.createElement(x.a,{style:{textAlign:"right"}},s.a.createElement("span",{className:"title"},"Level: "),s.a.createElement("span",null,a.level_int)))),s.a.createElement(_.a.Collapse,{eventKey:t},e.renderSpellDetails(a)))})))}}]),a}(s.a.Component);var U=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo,monsterSpells:e.monsterSpells}}),(function(e){return Object(c.b)({getMonsterSpellsAction:N},e)}))(q),V=a(58),X=a(23),$=a(55),Q=(a(157),function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSpellTabSelected=function(){n.setState({showMonsterSpells:!0,showMonstersLegendaryActions:!1,showMonsterActions:!1,showSpecialAbilities:!1});var e=n.props.monsterInfo?n.props.monsterInfo.spell_list:null;n.props.getMonsterSpellsAction(e)},n.state={showSpecialAbilities:!1,showMonsterActions:!1,showMonstersLegendaryActions:!1,showMonsterSpells:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(V.a,{show:this.props.showMonsterModal,onHide:this.props.handleMonsterModalClose,size:"lg",className:"search-modal"},s.a.createElement(V.a.Header,{closeButton:!0},s.a.createElement(k.a,null,s.a.createElement(T.a,null,s.a.createElement("div",{className:"monster-name-cr-container"},s.a.createElement("div",{className:"monster-name"},this.props.monsterInfo?this.props.monsterInfo.name:""),s.a.createElement("div",{className:"monster-cr"},"CR ",this.props.monsterInfo?this.props.monsterInfo.challenge_rating:"--"))),s.a.createElement(T.a,null,s.a.createElement("div",{className:"buttons-container"},s.a.createElement($.a,null,s.a.createElement(X.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showSpecialAbilities:!1,showMonsterActions:!1,showMonstersLegendaryActions:!1,showMonsterSpells:!1})},disabled:!this.state.showSpecialAbilities&&!this.state.showMonsterActions&&!this.state.showMonstersLegendaryActions&&!this.state.showMonsterSpells},"General Info"),s.a.createElement(X.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showSpecialAbilities:!0,showMonsterActions:!1,showMonstersLegendaryActions:!1,showMonsterSpells:!1})},disabled:this.state.showSpecialAbilities},"Special abilities"),this.props.monsterInfo&&!f.a.isEmpty(this.props.monsterInfo.spell_list)&&s.a.createElement(X.a,{className:"menu-button",variant:"secondary",onClick:this.onSpellTabSelected,disabled:this.state.showMonsterSpells},"Spell List"),s.a.createElement(X.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showMonsterActions:!0,showSpecialAbilities:!1,showMonstersLegendaryActions:!1,showMonsterSpells:!1})},disabled:this.state.showMonsterActions},"Actions"),this.props.monsterInfo&&!f.a.isEmpty(this.props.monsterInfo.legendary_actions)&&s.a.createElement(X.a,{className:"menu-button",variant:"secondary",onClick:function(){e.setState({showMonstersLegendaryActions:!0,showMonsterActions:!1,showSpecialAbilities:!1,showMonsterSpells:!1})},disabled:this.state.showMonstersLegendaryActions},"Legendary Actions")))))),s.a.createElement(V.a.Body,null,!this.state.showSpecialAbilities&&!this.state.showMonsterActions&&!this.state.showMonstersLegendaryActions&&!this.state.showMonsterSpells&&s.a.createElement(D,null),this.state.showSpecialAbilities&&s.a.createElement(K,null),this.state.showMonsterActions&&s.a.createElement(G,null),this.state.showMonstersLegendaryActions&&s.a.createElement(W,null),this.state.showMonsterSpells&&s.a.createElement(U,null)))}}]),a}(s.a.Component));var Y=Object(o.b)((function(e){return{monsterInfo:e.monsterInfo}}),(function(e){return Object(c.b)({getMonsterSpellsAction:N},e)}))(Q),Z=a(57),ee=a(89),te=(a(158),function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleMonsterModalOpen=function(){n.setState({showMonsterModal:!0})},n.handleMonsterModalClose=function(){n.setState({showMonsterModal:!1})},n.handlePreviousButtonPress=function(){n.props.getPageMonstersAction(n.props.pageMonsters.previous)},n.handleNextButtonPress=function(){n.props.getPageMonstersAction(n.props.pageMonsters.next)},n.enterPressed=function(e){"Enter"===e.key&&n.searchMonster()},n.updateSearchTerm=function(e){n.setState({searchTerm:e.target.value})},n.searchMonster=function(){console.log(n.state.searchTerm),n.props.searchTermAction(n.state.searchTerm)},n.addMonsterToSession=function(e){console.log(e);var t=[];t.push(e);var a=t.concat(n.props.sessionMonsters);localStorage.setItem("sessionMonstersDnd5Bestiary",JSON.stringify(a)),n.props.updateSessionMonstersAction(a)},n.showMonsterInfo=function(e){n.props.getMonsterInfoAction(e.slug),n.handleMonsterModalOpen()},n.rowEvents={onClick:function(e,t,a){console.log(e.target),console.log(t),n.props.getMonsterInfoAction(t.slug),n.handleMonsterModalOpen()}},n.state={showMonsterModal:!1,showSpecialFeatures:!1,showMonsterActions:!1,searchTerm:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){if(this.props.getPageMonstersAction(),localStorage.getItem("sessionMonstersDnd5Bestiary")){var e=JSON.parse(localStorage.getItem("sessionMonstersDnd5Bestiary"));this.props.updateSessionMonstersAction(e)}}},{key:"render",value:function(){var e=this,t=[{dataField:"name",text:"Monster Name"},{dataField:"type",text:"Type"},{dataField:"challenge_rating",text:"CR"},{dataField:"slug",text:"",formatter:function(t,a,n){return s.a.createElement(T.a,{md:4,xs:1},s.a.createElement(x.a,{className:"table-row-button-container"},s.a.createElement(X.a,{className:"table-row-button",variant:"secondary",onClick:function(){e.addMonsterToSession(a)}},s.a.createElement("i",{className:"fas fa-plus"}))),s.a.createElement(x.a,{className:"table-row-button-container"},s.a.createElement(X.a,{className:"table-row-button",variant:"secondary",onClick:function(){e.showMonsterInfo(a)}},s.a.createElement("i",{className:"far fa-eye"}))))}}];return s.a.createElement(k.a,null,this.props.pageMonsters&&s.a.createElement(s.a.Fragment,null,s.a.createElement(T.a,{className:"info-row"},s.a.createElement(x.a,{style:{textAlign:"left"}},s.a.createElement(Z.a,null,s.a.createElement(Z.a.Prepend,null,s.a.createElement(Z.a.Text,{onClick:this.searchMonster},s.a.createElement("i",{className:"fas fa-search"}))),s.a.createElement(ee.a,{onKeyPress:this.enterPressed,onChange:function(t){e.updateSearchTerm(t)}}))),s.a.createElement(x.a,{style:{textAlign:"right"}},s.a.createElement($.a,{"aria-label":"Basic example"},s.a.createElement(X.a,{variant:"secondary",disabled:!this.props.pageMonsters.previous,onClick:this.handlePreviousButtonPress},s.a.createElement("i",{className:"fas fa-chevron-circle-left"})),s.a.createElement(X.a,{variant:"secondary",disabled:!this.props.pageMonsters.next,onClick:this.handleNextButtonPress},s.a.createElement("i",{className:"fas fa-chevron-circle-right"}))))),s.a.createElement(L.a,{bootstrap4:!0,classes:"table-dark",keyField:"name",data:this.props.pageMonsters?this.props.pageMonsters.results:[],columns:t}),s.a.createElement(Y,{handleMonsterModalClose:this.handleMonsterModalClose,showMonsterModal:this.state.showMonsterModal})))}}]),a}(s.a.Component));var ae=Object(o.b)((function(e){return{pageMonsters:e.pageMonsters,monsterInfo:e.monsterInfo,sessionMonsters:e.sessionMonsters}}),(function(e){return Object(c.b)({getPageMonstersAction:M,getMonsterInfoAction:w,searchTermAction:I,updateSessionMonstersAction:S},e)}))(te),ne=function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showMonsterModal:!1},e.handleMonsterModalOpen=function(){e.setState({showMonsterModal:!0})},e.handleMonsterModalClose=function(){e.setState({showMonsterModal:!1})},e.showMonsterInfo=function(t){e.props.getMonsterInfoAction(t.slug),e.handleMonsterModalOpen()},e.removeMonsterFromSession=function(t){console.log(e.props.sessionMonsters);var a=[];a=a.concat(e.props.sessionMonsters),f.a.remove(a,(function(e){return e.slug===t.slug})),localStorage.setItem("sessionMonstersDnd5Bestiary",JSON.stringify(a)),e.props.updateSessionMonstersAction(a)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=[{dataField:"name",text:"Monster Name"},{dataField:"type",text:"Type"},{dataField:"challenge_rating",text:"CR"},{dataField:"slug",text:"",formatter:function(t,a,n){return s.a.createElement(T.a,{md:3,xs:1},s.a.createElement(x.a,{className:"table-row-button-container"},s.a.createElement(X.a,{className:"table-row-button",variant:"secondary",onClick:function(){e.removeMonsterFromSession(a)}},s.a.createElement("i",{className:"fas fa-trash"}))),s.a.createElement(x.a,{className:"table-row-button-container"},s.a.createElement(X.a,{className:"table-row-button",variant:"secondary",onClick:function(){e.showMonsterInfo(a)}},s.a.createElement("i",{className:"far fa-eye"}))))}}];return s.a.createElement(k.a,null,s.a.createElement(L.a,{bootstrap4:!0,classes:"table-dark",keyField:"name",data:this.props.sessionMonsters?this.props.sessionMonsters:[],columns:t}),s.a.createElement(Y,{handleMonsterModalClose:this.handleMonsterModalClose,showMonsterModal:this.state.showMonsterModal}),s.a.createElement("hr",null))}}]),a}(s.a.Component);var se=Object(o.b)((function(e){return{sessionMonsters:e.sessionMonsters}}),(function(e){return Object(c.b)({getMonsterInfoAction:w,updateSessionMonstersAction:S},e)}))(ne),re=(a(161),a(162),function(e){Object(E.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,!f.a.isEmpty(this.props.sessionMonsters)&&s.a.createElement(se,null),s.a.createElement(ae,null))}}]),a}(s.a.Component));var le=Object(o.b)((function(e){return{allMonsters:e.allMonsters,sessionMonsters:e.sessionMonsters}}),null)(re),oe=Object(c.c)({pageMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE_MONSTERS":return t.payload;default:return e}},monsterInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MONSTER_INFO":return t.payload;default:return e}},monsterSpells:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MONSTER_SPELLS":return t.payload;default:return e}},sessionMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SESSION_MONSTERS":return t.payload;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=Object(c.d)(oe,Object(c.a)(i.a));l.a.render(s.a.createElement(o.a,{store:ce},s.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(163)}},[[91,1,2]]]);
//# sourceMappingURL=main.da5740e0.chunk.js.map