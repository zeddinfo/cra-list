import React from 'react'

const Input = ({value, onChange}) => {
  return (
	<input style={{padding: 10, borderRadius: 20, width: '92%'}} value={value} onChange={onChange} placeholder='Artist / Album / Title'/>
  )
}

export default Input