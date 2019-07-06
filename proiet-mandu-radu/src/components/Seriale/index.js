import React, {Component} from 'react';
import ListaSeriale from '../ListaSeriale'

class Seriale extends Component{
	state ={
		seriale:[]  
	}

	componentDidMount(){
	    
	}

	preiaText = e =>{
		fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
	    .then(response => response.json())
	    .then(json => this.setState({seriale: json}))
	}

	render(){
		return(
			<div>
			Avem disponibile {this.state.seriale.length} seriale
			<div>
				<input type="text" onChange={this.preiaText}/>
			</div>
			<ListaSeriale lista = {this.state.seriale} />
			</div>						
		)

	}

}

export default Seriale;