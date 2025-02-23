const PersonForm =({newName,changeHandler,newPhoneNumber,changePhoneHandler,buttonClickHandler})=>
    {return(
      <form>
            <div>
              name: <input value={newName} onChange={changeHandler}/>
            </div>
            <div>number: <input value={newPhoneNumber} onChange={changePhoneHandler} /></div>
            <div>
              <button type="submit" onClick={buttonClickHandler}>add</button>
            </div>
          </form>
    )
    }
export default PersonForm