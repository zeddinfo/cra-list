import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css';
import CardItem from '../components/CardItem';
import Header from '../components/Header';
import LoadMore from '../components/LoadMore';
import { itunesApiRequest } from '../utils/util';
import Search from './Search';

const Home = () => {

	const props = useLocation();

	const [keyword, setKeyword] = useState(props.state ? props.state.id : null);
	const [data, setData] = useState([]);
	const [init, setInit] = useState(false);
	const [show, setShow] = useState(false);
	const [limit, setLimit] = useState(10);

	const searchData = async () => {
		const response = await itunesApiRequest(keyword, 'all', limit);
		console.log('response', response.results);
		setData(response.results);
	}

	useEffect(() => {
		console.log('props', props);
		searchData();
	},[limit]);

	const handleSearch = () => {
		setShow(false);
		setLimit(10);
		searchData();
	}
	


  return (
	<div>
		<Header search={() => setShow(true)}/>
			<div style={{display: 'flex', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
				<p>Search result for : </p>
				<p style={{color: '#7b34dd', fontSize: 18, fontWeight: 'bold'}}> {keyword}</p>
			</div>
			<div>
			{data.map((item, index) => {
					return (
						<CardItem title={item.artistName} key={index} description={item.collectionName} category={item.primaryGenreName} img={item.artworkUrl100} point={item.trackPrice}/>
					)
				})}
				{show && <Search onClose={() => setShow(false)} onChange={(e) => setKeyword(e.target.value)} onSearch={handleSearch}/>}
			</div>
			
				<LoadMore onPress={() => setLimit((c) => c + 10)}/>
			
	</div>
  )
}

export default Home