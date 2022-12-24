import axios from 'axios'
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL,
    USER_LOGOUT    
} from '../constants/userConstants'

export const login = (email, password) => async(dispatch) => {
    try {
       dispatch({
            type: USER_LOGIN_REQUEST,
       })

       const config = {
            headers: { 
                'Content-Type': 'application/json'
            },
       }  

       const { data } = await axios.post(
          'http://localhost:3000/api/users/login',
          { email, password },
          config
       )

        //console.log('data', data, email, password)
     
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
          
        } catch (error) {
          dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }

export const logout = () => (dispatch) => {
  localStorage.setItem('userInfo','')
  localStorage.removeItem('userInfo','')

  dispatch({ type: USER_LOGOUT})
  document.location.href = '/login'
}      
