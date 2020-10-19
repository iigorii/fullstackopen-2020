import React from 'react'

const PersonsForm = (props) => {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <div>
            name: <input 
            value={props.name}
            onChange={props.onNameChange}
            />
          </div>
          <div>
            number: <input 
            value={props.number}
            onChange={props.onNumberChange}
          />
        </div>
          <div>
            <button type={props.type}>add</button>
        </div>
        </form>
      </div>
    )
  }

  export default PersonsForm