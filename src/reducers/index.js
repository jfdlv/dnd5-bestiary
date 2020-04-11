import { combineReducers } from 'redux';
import pageMonsters from './pageMonsters';
import monsterInfo from './monsterInfo';
const rootReducer = combineReducers({
  pageMonsters: pageMonsters,
  monsterInfo: monsterInfo
})

export default rootReducer;
