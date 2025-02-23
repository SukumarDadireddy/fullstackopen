const Filter =({filterName, changeFilterHandler})=>
    {
      return (
          <div>filter shown with <input value={filterName} onChange={changeFilterHandler }/></div>
    
      )
    }
export default Filter