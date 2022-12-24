import {
    EMPLOYEE_INFO_REQUEST, 
    EMPLOYEE_INFO_SUCCESS, 
    EMPLOYEE_INFO_FAIL,

    EMPLOYEE_DASHBOARD_REQUEST,
    EMPLOYEE_DASHBOARD_SUCCESS,
    EMPLOYEE_DASHBOARD_FAIL,
    
    EMPLOYEE_ACTIVE_REQUEST,
    EMPLOYEE_ACTIVE_SUCCESS,
    EMPLOYEE_ACTIVE_FAIL

  } from '../constants/employeeConstants'

export const employeeReducer = (
    state = { info: [] },
    action
  ) => {
    switch (action.type) {
      case EMPLOYEE_INFO_REQUEST:
        return { ...state, loading: true }
      case EMPLOYEE_INFO_SUCCESS:
        return { loading: false, info: action.payload }
      case EMPLOYEE_INFO_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

export const employeeDashboardReducer = (
  state = { employeeDashboard: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_DASHBOARD_REQUEST:
      return { ...state, loading: true }
    case EMPLOYEE_DASHBOARD_SUCCESS:
      return { loading: false, info: action.payload }
    case EMPLOYEE_DASHBOARD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const activeEmpReducer = (
  state = { activeEmployee: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_ACTIVE_REQUEST:
      return { ...state, loading: true }
    case EMPLOYEE_ACTIVE_SUCCESS:
      return { loading: false, info: action.payload }
    case EMPLOYEE_ACTIVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
