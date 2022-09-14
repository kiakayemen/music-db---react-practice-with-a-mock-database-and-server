import React from 'react'

const Album = ({albumList}) => {
  
	const showlist = (albums) => (
		albums ?
			albums.map((item, i) => (
				<img key={i} alt="" src={`/images/albums/${item.cover}.jpg`}></img>
			))
			:<p>no images found, noob</p>
		)
	
	return (
	  	<div className='albums_list'>
		  {showlist(albumList)}
		</div>
  )
}

export default Album