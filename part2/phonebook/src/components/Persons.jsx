import phoneService from '../services/phone'
const filterPersons=(persons,filter)=>
{
    return(persons.filter(person=>person.name.toLowerCase().includes((filter.toLowerCase()))))
}

    const Persons=({setPersons,persons,filterName})=>
    {
      const deleteClickHandler =(person)=>
      {
       if(window.confirm("Delete"+person.name+"?"))
       {
        phoneService.remove(person.id).then
        ( 
          response=>setPersons(persons.filter(person=>person.id !== response.id))
        )
      }
      }
      return( <ul>{
      filterPersons(persons,filterName).map((person)=> 
      <li key={person.name}>
      {person.name} {person.number} 
      <button onClick={()=>deleteClickHandler(person)}>Delete</button>
      </li>)
      }</ul>)
    }

    export default Persons