import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-8f449.firebaseio.com/'
})

export default instance