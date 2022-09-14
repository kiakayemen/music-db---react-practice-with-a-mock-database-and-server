import React, { useState, useEffect } from "react";
import axios from "axios";
import Album from "./albumList";

const REQ_URL = "http://localhost:3001/artists";


const Artists = (props) => {

	const [artist, setArtist] = useState('');

	useEffect(() => {
		axios.get(`${REQ_URL}/${props.match.params.artistId}`)
		.then(response=>{
			 setArtist(response.data)
		}).catch(error=>{
			props.history.goBack()
		})
	}, [props])

	return (
		<>
			<div className="artist_bio">
				<div className="avatar">
					<span style={{
						background:`url('/images/covers/${artist.cover}.jpg') no-repeat`
					}}></span>
				</div>
				<div className="bio">
					<h3>{artist.name}</h3>
				</div>
				<div className="bio_text">
					{artist.bio}
				</div>
				<Album albumList={ artist.albums }/>
			</div>
		</>
	)
}

export default Artists;