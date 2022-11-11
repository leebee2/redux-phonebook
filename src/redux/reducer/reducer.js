let initialState = {
    contact: [],
    keyword : '',
}

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_CONTECT":
            let addData = {
                name: payload.name,
                phoneNum: payload.phoneNum,
            }
            return { ...state, contact: [...state.contact, addData]};
        case "SEARCH_BY_USERNAME":
            return { ...state, keyword: payload.keyword };
        default:
            return { ...state };
    }
}

export default reducer;