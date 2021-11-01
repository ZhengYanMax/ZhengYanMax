import base from './base'
import axios from '../utils/request'

const api = {
    getLogin(params) {
        return axios.get(base.login, {
            params
        })
    },
    getBanner() {
        return axios.get(base.blueLogin)
    },
    getUserinfo() {
        return axios.post(base.userinfo)
    },
    getDailySuggest(){
        return axios.get(base.travel+base.travelToday)
    },
    getHotCity(){
        return axios.get(base.travel+base.travelHot)
    }
}
export default api