
const urlReducer = (state, action) => {
    switch (action.type) {
        case "SET_URL":
            return {
                ...state,
                url: action.payload,
            };
        case "GET_URLS":
            return {
                ...state,
                urls: action.payload,
            };
        default:
            return state;
    }
};

export default urlReducer;
