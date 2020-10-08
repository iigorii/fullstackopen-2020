import React, {useState} from 'react'
import ReactDom from 'react-dom'

const Header = ({ name }) => <div><h1>{name}</h1></div>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props) => {

  if (props.all.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )  
  }

  return (
    <div>
      <StatisticsLine text="good" value={props.statistics[0].count} />
      <StatisticsLine text="neutral" value={props.statistics[1].count} />
      <StatisticsLine text="bad" value={props.statistics[2].count} />
      <StatisticsLine text="all" value={props.statistics[3].count} />
      <StatisticsLine text="average" value={props.statistics[4].count} />
      <StatisticsLine text="positive" value={props.statistics[5].count} />
    </div>
  )
  /*
  return (
    <div>
      <div>{props.statistics[0].text} {props.statistics[0].count}</div>
      <div>{props.statistics[1].text} {props.statistics[1].count}</div>
      <div>{props.statistics[2].text} {props.statistics[2].count}</div>
      <div>{props.statistics[3].text} {props.statistics[3].count}</div>
      <div>{props.statistics[4].text} {props.statistics[4].count}</div>
      <div>{props.statistics[5].text} {props.statistics[5].count}</div>
    </div>
  )
  */
}


const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allStats, setStats] = useState([])  

  const handleGoodClick = () => {
    setGood(good + 1)
    setStats(allStats.concat(1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setStats(allStats.concat(0))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setStats(allStats.concat(-1))
  }

  const countAverage = () => (good - bad) / allStats.length
    
  const countPositive = () =>  good / allStats.length * 100
    
    const statistics = {
      name: 'Statistics',
      stats: [
        {
          text: 'good',
          count: good
        },
        {
          text: 'neutral',
          count: neutral
        },
        {
          text: 'bad',
          count: bad
        },
        {
          text: 'all',
          count: allStats.length
        },
        {
          text: 'average',
          count: countAverage()
        },
        {
          text: 'positive',
          count: countPositive() + ' %'
        }
        
      ]
    }
  
  return (
    <div>
      <Header name='give feedback'/>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header name='statistics' />
      <Statistics all={allStats} statistics={statistics.stats} />
      
    </div>
  )
}

ReactDom.render(<App />,
  document.getElementById('root')
)