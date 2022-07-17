import React from 'react'
import { menu_logo, search as imgSearch } from '../assets/img'

const Header = ({search}) => {
  return (
	<div className="bar">
		<img src={menu_logo} style={{width: 16, height: 16}} alt="menu"/>
		<p style={{fontSize: 16, color: '#fff'}}>ngmusic</p>
		<img src={imgSearch} style={{width: 16, height: 16}} alt="search" onClick={search}/>
	</div>
  )
}

export default Header