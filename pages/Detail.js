import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
	const [show, setShow] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://api.tvmaze.com/shows/${id}`)
			.then((res) => res.json())
			.then((data) => setShow(data));
	}, [id]); //* only do once on mount

	return (
		<div>
			<h1>This is the Detail component</h1>
			<p> Show ID - {id} </p>
			<img src={show?.image?.original} alt={show?.name} />
		</div>
	);
};

export default Detail;

//? path - shows/:id
//? extract the id from the url
//? use the id to get the url to fetch
//? use the url to fetch the data
//? show the data in the page

// import { useParams } from "react-router-dom";

// function Detail() {
//     const { id } = useParams();

//     return (
//         <h2>Detail - {id} </h2>
//     )
// }

// export default Detail;
