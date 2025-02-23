
const Header = (props) =>
    {
      return(<h1>{props.name}</h1>)
    }
    
    const Content =({parts}) =>
    { 
      return(
      <> 
      {parts.map((part)=> <Part key={part.id} Exercise={part.name} numberOfExercises={part.exercises}/>)}
      </>
      )
    }
    
    
    const Total = ({parts})=>
    {
    return (<h3>Total of  {parts.reduce((A,C)=>A+C.exercises,0)} courses</h3>)
    }
    
    const Part = ({Exercise,numberOfExercises}) =>
    {
      return(<p>{Exercise} {numberOfExercises}</p>)
    }
    
    const Course =({course})=>
    {
      return(
        <div>
        {course.map((course) => <div key={course.id}> <Header name={course.name} /> <Content parts={course.parts} /> <Total parts={course.parts} /> </div>
        )}
        </div>
      )
    }
 
    export default Course