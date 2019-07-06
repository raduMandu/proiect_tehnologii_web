import React, {Component} from 'react';

class DetaliiSerial extends Component{
	state = {
		show: null		
	}

	componentDidMount(){
		const {id} = this.props.match.params;
		fetch(`https://api.tvmaze.com/search/shows/${id}?embeded=episodes`)
	    .then(response => response.json())
	    .then(json => this.setState({show: json}))	
	}

	render(){
		const {show} = this.state;
		console.log(show);

		return(
			<div>
				{show ===null
					&&
					<p>filmul nu a fost gasit</p>
				}
				{show !==null
					&&
					<div>
						<p>{show.name}</p>	
						<p>Lansat pe: {show.premiered}</p>	
						<p>Scor: {show.rating.average}</p>	
						<p>Numar episoade: {show._enbedded.episodes.length}</p>
						<p>
						<img alt="Serial" src={show.image.medium}/>
						</p>
					</div>	
						
				}
			</div>
		)	
	}
	

}

export default DetaliiSerial;