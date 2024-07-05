import axios from 'axios'


/*
 getAll
 create
 update
*/


const baseUrl = 'http://localhost:3001/persons'


function getAll(){
        return axios.get(baseUrl).then( res => res.data)
        .catch(error => alert("Error while fetching all resources"))
	}



function create (newObject) {
        axios.post(baseUrl,newObject).then( res => res.data)
	.catch(error => alert('Error while creation of resources'))
	}

function update(newObject,id){
       axios.put(`${baseUrl}/${id}`,newObject).then( res => res.data)
        .catch(error => alert('Error while updation of resources'))
	}


export default {getAll,create,update}


