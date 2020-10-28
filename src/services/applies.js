import axios from 'axios'
const baseUrl = '/api/apply'

let token = null

const setToken = newToken => {
	token = `bearer ${newToken}`

}

const getAll = () => {
	const config = {
		headers: { Authorization: token },
	}
	const request = axios.get(baseUrl, config)
	return request.then(response => response.data)
}

const create = async newObject => {


	const response = await axios.post(baseUrl, newObject)
	return response.data
}

export default { getAll, create,setToken }
