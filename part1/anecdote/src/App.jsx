import { useState } from 'react'
const Button = (props)=>
  {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
  }

const initializeVotes =(size)=>
{
  const voteObject ={}
  for(let i=0 ;i<size;i++)
  {
    voteObject[i]=0;
  }
  return(voteObject)
}

const DisplayAnecdote =({anecdote, voteCount})=>
{
return (<>
      <p> {anecdote}  </p>
      <p> has {voteCount}  votes </p>
</>)
}


  

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState(initializeVotes(anecdotes.length))

 
  const RandomNumberGenerator= (min,max)=>
  {
   return(Math.floor(Math.random()*(max-min+1))+min)
  }

  const handleNextOnClick =()=>
  {
    const Updateselected =RandomNumberGenerator(0,anecdotes.length-1)
    setSelected(Updateselected)
  }
  const handleVoteOnClick =()=>
  {
      const Updatedvotes = {...votes}
      Updatedvotes[selected] +=1
      setvotes(Updatedvotes)
  }

  const getAnecdoteWithMostVotes =(votes)=>
  {
    let maxvalue=0
    let maxKey=0
    for(const [Key,value] of Object.entries(votes))
    {
      if(value>=maxvalue)
      {
        maxvalue=value;
        maxKey =Key
      }
    }
    return maxKey;
  }

  return (
    <div>

      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecdote={anecdotes[selected]} voteCount={votes[selected]}/> 
      <Button onClick={handleVoteOnClick} text="Vote"/>
      <Button onClick={handleNextOnClick} text={"Next Anecdote"}/>
      <h1>Anecdote with most views</h1>
      <DisplayAnecdote anecdote={anecdotes[getAnecdoteWithMostVotes(votes)]} voteCount={votes[getAnecdoteWithMostVotes(votes)]}/>
    </div>
  )
}

export default App