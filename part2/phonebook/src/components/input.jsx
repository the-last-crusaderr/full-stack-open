




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

export default Input	  
