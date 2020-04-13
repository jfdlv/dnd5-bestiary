import { combineReducers } from 'redux';
import pageMonsters from './pageMonsters';
import monsterInfo from './monsterInfo';
import monsterSpells from './monsterSpells';
import sessionMonsters from './sessionMonsters';
const rootReducer = combineReducers({
  pageMonsters: pageMonsters,
  monsterInfo: monsterInfo,
  monsterSpells: monsterSpells,
  sessionMonsters: sessionMonsters
})

export default rootReducer;
