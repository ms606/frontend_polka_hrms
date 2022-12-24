import axios from "axios"
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

import authHeader from '../services/auth-header'
import { logout } from "./userActions"

export const employeeInfo = (id) => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_INFO_REQUEST })
    //  console.log('id',id)
      const { data } = await axios.get(`http://localhost:3000/api/employees/${id}`, 
      {headers: authHeader() });
     
      console.log(data)
      if (data.error){ 
        dispatch(logout())
      }

     dispatch({
        type: EMPLOYEE_INFO_SUCCESS,
        payload: data,
      })
    } catch (error) { 
      dispatch({
        type: EMPLOYEE_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const employeeDashboard = (keyword) => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_DASHBOARD_REQUEST })
      console.log(keyword)
      const { data } = await axios.get(`http://localhost:3000/api/employeeDashboard/${keyword}`)
  
      dispatch({
        type: EMPLOYEE_DASHBOARD_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: EMPLOYEE_DASHBOARD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }  

  export const activeEmp = () => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_ACTIVE_REQUEST })
    //  console.log('id',id)
      const { data } = await axios.get(`http://localhost:3000/api/employees`)
      
      localStorage.setItem('activeEmp', JSON.stringify(data))

    //  console.log(data)
     dispatch({
        type: EMPLOYEE_ACTIVE_SUCCESS,
        payload: data,
      })
      
    } catch (error) { 
      dispatch({
        type: EMPLOYEE_ACTIVE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }