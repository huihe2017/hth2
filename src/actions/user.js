import axios from '../common/axiosConf'

export function login(data,callback) {
    return dispatch => {
        axios.post('http://47.91.236.245:4030/user/customer/sign-in', {
            phone: data.phone,
            password: data.pwd,
            image_captcha: data.picCode

        })
            .then(function (response) {
                if (response.data.code === 0) {
                    dispatch({ type: 'LOGIN', data:response.data.data })
                    callback()
                    // localStorage.userName = response.data.data.phone
                    // localStorage.token = response.data.data.token
                    // localStorage.id = response.data.data.id
                } else {
                    callback('账号或密码错误')
                }
            })
            .catch(function (error) {
                alert(error);
            });
    }
}
