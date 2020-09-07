import api from './Api'

const getallsession = (payload) => {
    return api().post('/', payload)
}

const getUsers = () => {
    return api().get('/')
}
export default {
    getallsession,
    getUsers

}