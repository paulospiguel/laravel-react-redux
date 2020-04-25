import { createStore } from "redux";

const INITIAL_STATE = {
    loading: false,
    data: [],
    userInfo: {},
};

const userInfo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "REQUEST":
            return { ...state, loading: true };
        case "SUCCESS":
            return { ...state, loading: false, data: action.data };
        case "SIGN_IN":
            return { ...state, loading: false, userInfo: action.data };
        default:
            return state;
    }
};

const store = createStore(userInfo);

export default store;
