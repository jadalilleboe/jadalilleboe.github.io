import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getOnePost = (id) => {
    const request = axios.get(baseUrl+'/'+id)
    console.log(baseUrl+'/'+id)
    return request.then(response => response.data)
}

export default { getAll, getOnePost }