import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text }) => <h2>{text}</h2>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [mostVoteIndex, setMostVoteIndex] = useState(0);

  const handleAnecdote = () => {
    const anecdotesLength = anecdotes.length;
    const index = Math.floor(Math.random() * anecdotesLength);
    setSelected(index);
  };

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;

    let voteIndex = 0;
    let highestVote = 0;
    newVotes.forEach((anecdoteVote, index) => {
      if (anecdoteVote > highestVote) {
        highestVote = anecdoteVote;
        voteIndex = index;
      }
    });

    setMostVoteIndex(voteIndex);
    setVotes(newVotes);
  };

  return (
    <div>
      <Display text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button text="Vote" handleClick={handleVotes} />
      <Button text="Next Anecdote" handleClick={handleAnecdote} />

      <Display text="Anecdote with most votes" />
      <p>{anecdotes[mostVoteIndex]}</p>
    </div>
  );
};

export default App;
