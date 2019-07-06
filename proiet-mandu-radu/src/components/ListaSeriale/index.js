import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';




const RandLista = ({seriale}) =>(
		<li >
			<Link to={`/seriale/${seriale.show.id}`}>
			{seriale.show.name}
			</Link>
		</li>
)


const ListaSeriale = props =>{
	return(
			<div>
			    <ul className = "lista-seriale">
			    {props.lista.map(seriale =>(
			    	<RandLista seriale = {seriale}	key= {seriale.show.id} />
			    ))}
			    </ul>
			</div>
		)
}

export default ListaSeriale;