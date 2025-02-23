import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
{
return (axios.get(baseUrl)
.then((response)=>response.data))
}

const create =(obj) =>
{
    return(axios.post(baseUrl,obj)
    .then((response)=>response.data))
}

const remove =(id)=>
{
   return( axios.delete(`${baseUrl}/${id}`).then
    (response=>response.data))
}

const update =(id,obj)=>
{
    return(axios.put(`${baseUrl}/${id}`,obj).then
    (response=>response.data))
}
export default{getAll,create,remove,update}