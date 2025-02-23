import { useState,useEffect} from 'react'
import phoneService from './services/phone'
import Notification from './components/Notification'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [AddedNumberMessage, setAddedNumberMessage] = useState(null)
  const [ErrorMessage,setErrorMessage] = useState(null)
  const hook = ()=> {phoneService.getAll().then(response=>setPersons(response))}
  useEffect(hook,[])

const changeHandler =(event)=>setNewName(event.target.value)
const changePhoneHandler =(event)=>setNewPhoneNumber(event.target.value)
const changeFilterHandler =(event)=>setFilterName(event.target.value)




const buttonClickHandler =(event)=>
{
  event.preventDefault()
  const personObj={name:newName, number:newPhoneNumber}
  if(persons.some((person)=>person.name===newName))
  {
    if(window.confirm(`${newName} already in the phonebook,replace the old number with new one?`))
    {
      const addedPerson=persons.find((person)=>person.name===newName)
      phoneService.update(addedPerson.id,personObj)
      .then(response=>
      {
        console.log(response)
        setPersons(persons.map(person=> person.name===response.name ? response : person))
        setNewName('')
        setNewPhoneNumber('') 
      })
      .catch(error=>
        {
          setErrorMessage(`Information '${newName}' has already removed from server`)
          setTimeout(() => setErrorMessage(null), 5000)
          setNotes(persons.filter(person => n.id !== id))
        }
      )
    }
  }
  else
  {
    phoneService.create(personObj)
    .then(response => 
    {
      setPersons(persons.concat(response))
      setAddedNumberMessage(`Added ${newName}`)
      setTimeout(() => {
        setAddedNumberMessage(null)
        
      }, 5000);
      setNewName('')
      setNewPhoneNumber('') 
    })
  
  }
}

return (
  <div>
    <h2>Phonebook</h2>
    <Notification message={ErrorMessage} messageType="error"></Notification>
    <Notification message={AddedNumberMessage} messageType="info"></Notification>
    <Filter filterName={filterName} changeFilterHandler={changeFilterHandler}/>
    <h3>Add a new</h3>
    <PersonForm 
      newName={newName} changeHandler={changeHandler}
      newPhoneNumber={newPhoneNumber} changePhoneHandler={changePhoneHandler}
      buttonClickHandler={buttonClickHandler}
    />
    <h3>Numbers</h3>
   <Persons filterName={filterName} persons={persons} setPersons={setPersons} />
  </div>
)
}
export default App