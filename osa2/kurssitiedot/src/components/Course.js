import React from 'react'

const Header = ({header}) => <h2>{header}</h2>

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Total = ({total}) => {
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Content = ({content}) => {
  const exercises = content.map(exercise => exercise.exercises)
  const total = exercises.reduce( (s, p) => s + p, 0)
  
  return (
    <div>
      {content.map(part => 
        <Part name={part.name} exercises={part.exercises} key={part.id}/> 
        )}
      <Total total={total}/>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header header={props.name}/>
      <Content content={props.content} />
    </div>
  )
}

export default Course