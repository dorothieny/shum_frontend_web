const initialState = {
    userId: null,
    userName: "",
    userEmail: "",
    isPlaying: false,
    shumId: null,
    isShowDrawer: false,
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MAIN_REDUCER': {
            return {
                ...state,
                ...action.payload
            }
        };
    default:
        return state;
    }
}