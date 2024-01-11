
const initialState = {
    page: false
}

export const pageReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "HOME_PAGE":
            // console.log("HOME_PAGE",action.page);
            state.page = action.page
            // console.log("state.page",state.page);
            // break

        case "CART_PAGE":
            // console.log("CART_PAGE",action.page);
            state.page = action.page
            // break
        default:
            return state

    }
};