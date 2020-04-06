import { combineReducers } from 'redux';
import allMonsters from './allMonsters';
import monsterInfo from './monsterInfo';
const rootReducer = combineReducers({
  allMonsters: allMonsters,
  monsterInfo: monsterInfo
})

export default rootReducer;
