import React, { useState,useEffect } from 'react'
//import axios from 'axios';
import {getPersonList,getPerson,deletePerson,addPerson,updatePerson} from './services/persons'






const Filter = ({filterText,handleFiltering}) => {

  return (
    <div>
      filter shown with: <input value={filterText} onChange={handleFiltering}/> 
     </div>


  )
}


const PersonForm = ({newName,newNumber,handleSubmit,handleName,handleNumber}) => {

  return(
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


  )


}


const Persons = ({filteredlist,setFilteredlist,setPersons}) => {


  const handleDeletion = (event) => {

    let str = event.target.parentNode.innerHTML;
    let arr = str.split(' ');
    let fullName = arr[1] + " "+ arr[2];
    let confirmation = window.confirm(`Do you want to delete ${fullName}`);
    if(confirmation){
      console.log(arr,arr.length); //

      let personObject = filteredlist.filter( elem => elem.name === fullName);
    
      console.log(personObject); //

      deletePerson(personObject[0].id);

      let newList = filteredlist;
      newList = newList.filter( elem => elem.id !== personObject[0].id  )
      
      // updating the personList..


      getPersonList().then( response => setPersons(response.data) )
      setFilteredlist(newList)
    }
    
  }


  return (
    <div>
        {filteredlist.map( person => <p key={person.name}> {person.name} {person.number} <button onClick={handleDeletion}>delete</button> </p>) }
      </div>

  )

}


const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('Add name..');
  const [newNumber,setNewNumber] = useState('');
  const [filterText,setFilterText] = useState('');
  const [filteredlist,setFilteredlist] = useState(persons);

 
  console.log(getPerson(1));   //




  const hook = () => {

       getPersonList().then(response => setPersons(response.data)); 
      console.log("Promise Fulfilled",getPersonList()); 
  }


  useEffect(hook,[]);


  const handleName = (event) => {
    setNewName(event.target.value);
  } 


  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFiltering = (event) => {

      setFilterText(event.target.value);
      console.log(filterText);            //
      let newList = [];
      newList = persons.filter( person => person.name.toLowerCase().includes(filterText.toLowerCase()) );
      setFilteredlist(newList);
      console.log(newList);

  }


  const handleSubmit = (event) => {

    event.preventDefault();
    let newPerson = {name:newName,number:newNumber};

    let existence = persons.filter( (person) => person.name ===  newPerson.name );
                                        

    if(existence.length > 0){
      let confirmation = window.confirm(`${existence[0].name} is already added to phonebook,replace the old number with new one?`);
      if(confirmation){

        newPerson["id"] = existence[0].id;
        updatePerson(newPerson);

        //updating new list

        let newList = persons.map( person => person.name !== newPerson.name ?  person  : newPerson );
        setPersons(newList);

      }
    }
    else{
      addPerson(newPerson).then( (res) => { getPersonList().then(response => setPersons(response.data)) });

      /* trash must be deleted later
      newPerson["id"] = persons.length+1;
      setPersons(persons.concat(newPerson));
      */
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterText={filterText} handleFiltering={handleFiltering}/>

      <h2>add a new</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber}/>
      
      <h2>Numbers</h2> 

      <Persons filteredlist={filteredlist} setFilteredlist={setFilteredlist} setPersons={setPersons}/>
      
    </div>
  )
}

export default App