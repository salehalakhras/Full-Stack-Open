import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodBtnClick = () => {
    setGood(prev => prev + 1);
  }

  const handleNeturalBtnClick = () => {
    setNeutral(prev => prev + 1);
  }

  const handleBadBtnClick = () => {
    setBad(prev => prev + 1);
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text={'Good'} onClick={handleGoodBtnClick}></Button>
      <Button text={'Neutral'} onClick={handleNeturalBtnClick}></Button>
      <Button text={'Bad'} onClick={handleBadBtnClick}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}


export const Statistics = ({ good, neutral, bad }) => {
  const allFeedback = good + neutral + bad;
  const averageFeedback = (good - bad) / allFeedback;
  const positiveFeedback = good / allFeedback;

  return (
    <div>
      <h2>Statistics</h2>
      {allFeedback == 0 ? <p>No Feedback given yet.</p>
        : (
          <table>
            <tbody>
              <StatisticsLine text={'Good: '} value={good}></StatisticsLine>
              <StatisticsLine text={'Neutral: '} value={neutral}></StatisticsLine>
              <StatisticsLine text={'Bad: '} value={bad}></StatisticsLine>
              <StatisticsLine text={'All: '} value={allFeedback}></StatisticsLine>
              <StatisticsLine text={'Average: '} value={averageFeedback}></StatisticsLine>
              <StatisticsLine text={'Positive: '} value={positiveFeedback}></StatisticsLine>
            </tbody>
          </table>
        )

      }
    </div>
  )
}



export const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}


export const StatisticsLine = ({ value, text }) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}




export default App