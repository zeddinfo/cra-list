import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ContainerLogo from '../components/ContainerLogo'
import Input from '../components/Input'

const OnBoarding = () => {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState();

	const navigateToSearch = () => {
		navigate('/Home', {
			state: {
				id: keyword
			}
		});
	}
	


  return (
	<div className="App">
	<header className="App-header">
	  <ContainerLogo/>
	  <div style={{position: 'absolute', bottom: 10, width: '80%', paddingLeft: 30, paddingRight: 30}}>
		  <Input value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
		  <Button title={'Search'} isPrimary={true} onPress={navigateToSearch}/>
	  </div>
	</header>
  </div>
  )
}

export default OnBoarding