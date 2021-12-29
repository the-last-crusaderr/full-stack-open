import axios from 'axios';
const baseUrl = 'http://localhost:3002/persons'

let totalPerson = 0;

export const getPersonList = () => {
    
    let requestResult = axios.get(baseUrl);

    requestResult.then( (response) => { totalPerson = response.data.length } )

    console.log(requestResult);   //

    return requestResult;
    
}


export const getPerson = (id) => {

    let url = `${baseUrl}/${id}`;
    let requestResult = axios.get(url);
    return requestResult;

}


export const deletePerson = (id) => {
    
    let deleteUrl = `${baseUrl}/${id}`;
    axios.delete(deleteUrl);
}



export const addPerson = (newPerson) => {

    //let newPerson = {name:newName,number:newNumber}           
       

    getPersonList().then();
    newPerson["id"] = totalPerson+1;

    let requestResult = axios.post(baseUrl,newPerson);
    console.log("requestResult = ",requestResult) //
    return requestResult;
    

}



export const updatePerson = (newPerson) => {

    let url = `${baseUrl}/${newPerson.id}`;
    axios.put(url,newPerson)


}
