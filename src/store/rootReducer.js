import { combineReducers } from 'redux';
import { authReducer,dairyMasterReducer ,dairyMasterAddReducer , dairyMasterDeleteReducer} from './reducers';


const appReducer = combineReducers({
    authReducer,
    dairyMasterReducer,
    dairyMasterAddReducer,
    dairyMasterDeleteReducer

});

const initialState = appReducer({}, {});

const rootReducer = (state = initialState, action) => {

    return appReducer(state, action);
};

export default rootReducer;