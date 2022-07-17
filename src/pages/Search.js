import React from 'react'
import { close } from '../assets/img'
import SearchComponent from '../components/SearchComponent'

const Search = ({onClose, onChange, onSearch}) => {
  return (
	<div style={{position: 'fixed', height: '100%', width: '100%', backgroundColor: 'rgba(28, 28, 45, 0.9)', top: 0, zIndex: 100, padding: 10, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
		<img src={close} style={{position: 'absolute', top: 20, right: 40, width: 20}} alt='close' onClick={onClose}/>
		<SearchComponent onChange={onChange} onSearch={onSearch}/>
	</div>
  )
}

export default Search