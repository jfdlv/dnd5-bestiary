export default function(state = null , action) {
    switch(action.type) {
        case 'SET_ALL_MONSTERS':
            return action.payload;
            
    }
    return state;
}