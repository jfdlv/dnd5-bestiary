import axios from 'axios';

export const getAllMonstersAction = () => async dispatch =>{
    const response = await axios.get("https://www.dnd5eapi.co/api/monsters");
    if(response) {
      dispatch({type: 'SET_ALL_MONSTERS', payload: response.data.results});   
    }
}

export const getMonsterInfoAction = (url) => async dispatch => {
    const response = await axios.get(`https://www.dnd5eapi.co${url}`);
    if(response){
        dispatch({type: 'SET_MONSTER_INFO', payload: response.data})
    }
}