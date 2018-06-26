const initialState = {
    messages: [],
    message: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_MESSAGES':
            return {
                ...state,
                messages:action.messages
            };
        case 'VIEW_MESSAGE':
            return {
                ...state,
                message:action.message
            };
        default :
            return state;
    }
};