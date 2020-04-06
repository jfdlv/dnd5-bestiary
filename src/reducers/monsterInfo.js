export default function(state = null , action) {
    switch(action.type) {
        case 'SET_MONSTER_INFO':
            return action.payload;
            
    }
    return state;
}