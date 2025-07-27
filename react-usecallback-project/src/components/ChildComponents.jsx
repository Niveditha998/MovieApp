import React from 'react'

const ChildComponents = React.memo(
    (props) => {
  console.log("Child component will re render again")
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
}
)

export default ChildComponents
