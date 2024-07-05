
import Input from './input'


function Form({handleSubmit,newEntry,setNewEntry,newPhoneEntry,setPhoneEntry}) {

	return (
         <form onSubmit={handleSubmit}>
           <Input newEntry={newEntry} setNewEntry={setNewEntry}
           newPhoneEntry={newPhoneEntry} setPhoneEntry={setPhoneEntry}/> <br/>
           <button type="submit">save</button>
         </form>
)
}       


export default Form
