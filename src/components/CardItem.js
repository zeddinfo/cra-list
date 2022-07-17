import React from 'react'
import { dollar } from '../assets/img'

const CardItem = ({img, title, description, category, point}) => {
  return (
	<div className='Rectangle'>
		<div style={{display: 'flex', flexDirection: 'row'}}>
			<div className='Bitmap'>
				<img src={img} alt='item_image' style={{borderRadius: 10}}/>
			</div>
			<div style={{width: '100%'}}>
				<p style={{color: '#334155', fontSize: 10, fontWeight: 'bold', margin: 0}}>{title}</p>
				<p style={{color: '#334155', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: 280, margin: 0}}>{description}</p>

				<div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center', position: 'relative', top: 40}}>
					<div style={{backgroundColor: '#10b981', borderRadius: 8, padding: 5, alignContent: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', maxWidth: 100, maxHeight: 15}}>
						<div>
							<p style={{margin: 0, color: 'white', fontSize: 10,}}>{category}</p>
						</div>
					</div>
					<div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
						<img src={dollar} alt='dollar' style={{width: 15, height: 15, marginRight: 8}}/>
						<p style={{color: '#f5b014', fontSize: 14, fontWeight: 'bold'}}>{point == null || '' ? 0 : point}</p>
					</div>
				</div>
			</div>
			
		</div>
	
		
	</div>
  )
}

export default CardItem