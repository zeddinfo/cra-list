import React from 'react'

const Button = ({onPress, isPrimary = true, title}) => {
  return (
	<div style={{
		paddingTop: 1,
		paddingBottom: 1,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: isPrimary ? 'rgba(255, 255, 255, 0.2)' : '#fff',
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'center',
		marginBottom: 5,
		marginTop: 10,
		marginLeft: 55,
		marginRight: 55,
	}} onClick={onPress}>
		<p style={{color: isPrimary ? '#fff' : 'gray', fontSize: 12}}>{title}</p>
	</div>
  )
}

export default Button