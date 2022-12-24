import {
    EMPLOYEE_PROFILE_REQUEST, 
    EMPLOYEE_PROFILE_SUCCESS, 
    EMPLOYEE_PROFILE_FAIL    
} from '../constants/employeeProfileConstants'

export const employeeProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_PROFILE_REQUEST:
        return { loading: true }
      case EMPLOYEE_PROFILE_SUCCESS:
        return { loading: false, employeeProfile: action.payload }
      case EMPLOYEE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }