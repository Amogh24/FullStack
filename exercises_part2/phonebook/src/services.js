import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const Delete=(id)=>
{
  
const nurl=baseUrl.concat('/').concat(id)
console.log(nurl)
 axios.delete(nurl) 
 console.log("deleted")
}
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create,
  Delete: Delete,
  update: update
}
