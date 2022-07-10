import { combineReducers } from 'redux';
import { authReducer,dairyMasterReducer } from './reducers';


const appReducer = combineReducers({
    authReducer,
    dairyMasterReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state = initialState, action) => {

    return appReducer(state, action);
};

export default rootReducer;