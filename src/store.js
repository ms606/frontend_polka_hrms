import  { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'
import { employeeReducer, employeeDashboardReducer, activeEmpReducer } from './reducers/employeeReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    employeeInfo: employeeReducer,
    employeeDashboard: employeeDashboardReducer,
    activeEmployee: activeEmpReducer,
}) 

const userInfoFromStorage= localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo')) : null

const activeEmpFromStorage = localStorage.getItem("activeEmp") ? JSON.parse(localStorage.getItem('activeEmp')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage},
    activeEmployee: { activeEmp: activeEmpFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store

// export default configureStore({
//     reducer: {}
// })