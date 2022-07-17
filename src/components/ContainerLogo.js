import React from 'react'
import { logo_app } from '../assets/img'

const ContainerLogo = () => {
  return (
	<div className='logo-app'>
		<img src={logo_app} style={{width: 100, height: 100}}/>
	</div>
  )
}

export default ContainerLogo