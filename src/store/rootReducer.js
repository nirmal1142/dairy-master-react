import { combineReducers } from 'redux';
import { authReducer,dairyMasterReducer ,dairyMasterAddReducer} from './reducers';


const appReducer = combineReducers({
    authReducer,
    dairyMasterReducer,
    dairyMasterAddReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state = initialState, action) => {

    return appReducer(state, action);
};

export default rootReducer;