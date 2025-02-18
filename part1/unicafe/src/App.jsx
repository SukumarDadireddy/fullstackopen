import { useState } from 'react'


const Header = ({header})=>
{
 return (<h1>{header}</h1>)
}

const Button = (props)=>
{
return(
  <button onClick={props.onClick}>{props.text}</button>
)
}

const StatisticLine =(props)=>
{
  return(<tr>
            <td>{props.Text}</td><td>{props.Value}</td>
          </tr>)
}


const Statistics =(props) =>
  {
    <Header header={"statistics"} />
    if(props.all===0)
    {
      return(<p> No Feedback Given </p>)
    }
    else
    {
    return(
    <table>
      <tbody>
        <StatisticLine Text="good" Value={props.good}/>
        <StatisticLine Text="neutral" Value={props.neutral}/>
        <StatisticLine Text="bad" Value={props.bad}/>
        <StatisticLine Text="all" Value={props.all}/>
        <StatisticLine Text="average" Value={props.average}/>
        <StatisticLine Text="positive" Value={props.positive+"%"}/>
        </tbody>
    </table>
    )
  }
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood =()=>
  {
    const updatedGood =good+1;
    const updatedAll =all+1;
    setGood(updatedGood);
    setAll(updatedAll);
    const updatePositive = (((positive/100)*(all))+1)/(updatedAll)
    setPositive(updatePositive*100)
    const updateAverage= (((average)*(all))+1)/(updatedAll)
    setAverage(updateAverage)
  }
  const handleBad =()=>
  {
    const updatedBad =bad+1;
    const updatedAll =all+1;
    setBad(updatedBad);
    setAll(updatedAll)
    const updatePositive = ((positive/100)*(all))/(updatedAll)
    setPositive(updatePositive*100)
    const updateAverage= (((average)*(all))-1)/(updatedAll)
    setAverage(updateAverage)
  }
   const handleNeutral =()=>
  {
    const updatedNeutral =neutral+1;
    const updatedAll =all+1;
    setNeutral(updatedNeutral);
    setAll(updatedAll)
    const updatePositive = ((positive/100)*(all))/(updatedAll)
    setPositive(updatePositive*100)
    const updateAverage= (((average)*(all)))/(updatedAll)
    setAverage(updateAverage)
  }

  return (
    <div>
      <Header header={"give feedback"} />
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App