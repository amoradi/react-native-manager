import { combineReducers } from 'redux';
import DummyReducer from './DummyReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  dummy: DummyReducer,
  auth: AuthReducer,
  EmployeeForm: EmployeeFormReducer,
});
