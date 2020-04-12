import { combineReducers } from 'redux';
import pageMonsters from './pageMonsters';
import monsterInfo from './monsterInfo';
import monsterSpells from './monsterSpells';
const rootReducer = combineReducers({
  pageMonsters: pageMonsters,
  monsterInfo: monsterInfo,
  monsterSpells: monsterSpells
})

export default rootReducer;
