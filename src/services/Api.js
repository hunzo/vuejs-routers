import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/users`,
        headers: {
            'authorization': `Bearer token`,
            'content-type': `application/json`

        }
    })
}