import React from 'react'

function Employee({...obj}) {
  return (
    <div>
      <h1>Name : {obj.name} , Age:{obj.age}</h1>
    </div>
  )
}

export default Employee

