import React from 'react'

function Counter({count,title,...obj}) {
    ///const {count,title}=props;
  return (
    <div>
      <p> {title} : {count} {obj.topic}</p>
    </div>
  )
}

export default Counter
