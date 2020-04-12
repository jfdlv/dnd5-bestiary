import axios from 'axios';

export const getPageMonstersAction = (nextUrl = null) => async dispatch =>{
    //const response = await axios.get("https://www.dnd5eapi.co/api/monsters");
    // trying out a different api
    let response = ""
    if(nextUrl) {
        response = await axios.get(nextUrl);
    } else {
        response = await axios.get("https://api.open5e.com/monsters");
    }
    if(response) {
      dispatch({type: 'SET_PAGE_MONSTERS', payload: response.data});   
    }
};

export const searchTermAction = (term) => async dispatch => {
    const response = await axios.get(`https://api.open5e.com/monsters/?search=${term}`)
    if(response) {
        dispatch({type: "SET_PAGE_MONSTERS", payload:response.data})
    }
}

export const getMonsterInfoAction = (url) => async dispatch => {
    const response = await axios.get(`https://api.open5e.com/monsters/${url}`);
    if(response){
        dispatch({type: 'SET_MONSTER_INFO', payload: response.data})
    }
};

export const getMonsterSpellsAction = (urls) => async dispatch => {
    
    let promises = [];
    let spellsArray = [];

    urls.map((url) => { 
        promises.push(axios.get(url));
        return null;
    })

    const responses = await axios.all(promises);

    responses.map((response) => {
        spellsArray.push(response.data);
        return null;
    })  

    dispatch({type: "SET_MONSTER_SPELLS", payload: spellsArray})

    return spellsArray;
}