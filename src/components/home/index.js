// class component

// import React, { Component } from "react";
// import axios from "axios";
// import Banner from "./banner";
// import ArtistsList from "./artistsList";

// import axios from 'axios';

// const URL_ARTISTS = "http://localhost:3001/artists";
// class Home extends Component {

// 	state = {
// 		artists: []
// 	}

// 	componentDidMount() {
// 		axios.get(URL_ARTISTS)
// 			.then(response => {
// 			this.setState({ artists: response.data });
// 		});
// 	}

// 	render() {
// 	//   console.log(this.state);
// 	return (
// 		<>
// 			<Banner />
// 			<ArtistsList allArtists={this.state.artists}/>
// 		</>
// 	)
//   }
// }

// export default Home;

import React, { Component } from "react";
import Banner from "./banner";
import axios from "axios";
import ArtistsList from "./artistsList";

const URL_ARTISTS = "http://localhost:3001/artists";

export class Home extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
	  axios.get(URL_ARTISTS).then(
		  res => {
			  this.setState({ artists: res.data })
			  console.log(this.state.artists);
		  }
	  )
  }

  render() {
    return (
      <>
			<Banner />
			<ArtistsList allArtists={this.state.artists}/>
      </>
    );
  }
}

export default Home;
