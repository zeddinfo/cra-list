import React from 'react'
import Button from './Button'
import Input from './Input'

const SearchComponent = ({onChange, value, onSearch}) => {
  return (
	<div>
		<p style={{alignSelf: 'center', textAlign: 'center'}}>Search</p>
			<Input value={value} onChange={onChange}/>
		<div className="Rectangle-Copy" onClick={onSearch}>Search</div>
	</div>
  )
}

export default SearchComponent