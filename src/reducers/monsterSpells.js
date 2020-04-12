export default function(state = null , action) {
    switch(action.type) {
        case 'SET_MONSTER_SPELLS':
            return action.payload;
        default:
            return state;
    }
}