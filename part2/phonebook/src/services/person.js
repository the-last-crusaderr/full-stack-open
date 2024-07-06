import axios from 'axios'


/*
 getAll
 create
 update
 remove
*/


const baseUrl = 'http://localhost:3001/persons'


function getAll(){
        return axios.get(baseUrl).then( res => res.data)
        .catch(error => alert("Error while fetching all resources"))
	}



function create (newObject) {
       return  axios.post(baseUrl,newObject).then( res => res.data)
	.catch(error => alert('Error while creation of resources'))
	}

function update(newObject,id){
       return axios.put(`${baseUrl}/${id}`,newObject).then( res => res.data)
        .catch(error => alert('Error while updation of resources'))
	}

function remove(id){
           return axios.delete(`${baseUrl}/${id}`).then(res => res.data)
	   .catch(error => alert(`Error while deletion of resource ${id}`))
	}



export default {getAll,create,update,remove}


