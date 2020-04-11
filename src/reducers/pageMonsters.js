export default function(state = null , action) {
    switch(action.type) {
        case 'SET_PAGE_MONSTERS':
            return action.payload;
        default:
            return state;
    }
}