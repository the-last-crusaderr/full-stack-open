import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Input({newEntry,setNewEntry,newPhoneEntry,setPhoneEntry}) {
	const handleInput = (event) => setNewEntry(event.target.value)
        console.log(event.target.value)
	console.log("new entry",newEntry)

	const handlePhoneInput = (event) => setPhoneEntry(event.target.value) 

     return (
	<>
	 <span> Name: </span>
         <input type="text" value={newEntry} onChange={handleInput}/>
	 <br/>
	 <span>Number: </span>
	 <input type="text" value={newPhoneEntry} onChange={handlePhoneInput}/>
	  
        </>
     )
	}


function Filter({searchText,person,setSearchText,filteredList,setFilteredList}) {
       
       const handleInput = (event) => {
	       setSearchText(event.target.value)
               setFilteredList( person.filter( (item) => item.name.includes(searchText)))
       }
       console.log("searchText",searchText)

	return (
	 <>
	  filter shown with:
          <input type='text' onChange={handleInput} value={searchText}/>
         </>
	)
	}


	


function App() {

// dummy data for testing search features
  const [person, setPerson] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  // react states
  const [newEntry,setNewEntry] = useState('')
  const [newPhoneEntry,setPhoneEntry] = useState('')
  const [searchText,setSearchText] = useState('')	
  const [filteredList, setFilteredList] = useState(person)

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

     <form onSubmit={handleSubmit}>
      <Input newEntry={newEntry} setNewEntry={setNewEntry}
       newPhoneEntry={newPhoneEntry} setPhoneEntry={setPhoneEntry}/> <br/>

      <button type="submit">save</button>
     </form>

     <h2>Phone Directory:</h2>
     <ul>
      { filteredList.map(item => <li key={item.name}> {item.name} {item.number}</li> ) }
     </ul>
    </>
  )
}

export default App
