import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import Filter from './components/filter'
import axios from 'axios'






function App() {


    


// dummy data for testing search features
  const [person, setPerson] =useState([
    { 
      "name": "Bert Burger", 
      "number": "040-123456",
      "id": "1000"
    }])

  // react states
  const [newEntry,setNewEntry] = useState('')
  const [newPhoneEntry,setPhoneEntry] = useState('')
  const [searchText,setSearchText] = useState('')	
  const [filteredList, setFilteredList] = useState([
    { 
      "name": "Bert Burger", 
      "number": "040-123456",
      "id": "1000"
    }])



// fetching data from db.json with json-server which usually runs at -p3000
 

     useEffect(
     () =>{ axios.get('http://localhost:3001/persons')
            .then( response => {
             console.log("Promise fulfilled")
	     setPerson(response.data)
	     console.log(response.data)
	     console.log('Value in person state ',person)
	     } )
            .catch(error => {
              console.error('There was an error fetching the persons data!', error);
            })
//         console.log("rendering",jsonData.length," people")
},[])




  const duplicate = () => {
	  let found = person.find( item => newEntry === item.name  )
        // console.log("Inside duplicate procedure",found,newEntry)
	 return (found === undefined) ? false  : true         
	 }

  const handleSubmit = (event) => {
		event.preventDefault()
                
		if(duplicate()){
		   alert(`${newEntry} is already in the phonebook` )	
                   return
		 }

		let tempPerson = [...person]
		let tempObj = {'name':newEntry,'number':newPhoneEntry,'id':person.length}
		tempPerson.push(tempObj)
		setPerson(tempPerson)
		
	  } 



  return (
    <>
     <h2>Phonebook</h2>
     
     <Filter searchText={searchText} person={person} setSearchText={setSearchText}
      filteredList={filteredList} setFilteredList={setFilteredList} />

     <h3>Add a new:</h3>
     
     <Form handleSubmit={handleSubmit} newEntry={newEntry} setNewEntry={setNewEntry}
           newPhoneEntry={newPhoneEntry} setPhoneEntry={setPhoneEntry}/>


     <h2>Phone Directory:</h2>

     <ul>
      { filteredList.map(item => <li key={item.name}> {item.name} {item.number}</li> ) }
     </ul>
    </>
  )
}

export default App
