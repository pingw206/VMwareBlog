import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});

export const login = (account, password) => {
  return (dispatch) => {
    //请求数据，应该用post，模拟方便情况下用get
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if (result){
        dispatch(changeLogin())
      } else {
        alert('密码错误')
      }
    });
  }
}

export const logout = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false
});