import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Seriale from '../Seriale';
import DetaliiSerial from '../DetaliiSerial'

const Rute = props =>(
	<Switch>
		<Route exact path ="/" component ={Seriale}/>
		<Route path= "/seriale/:id" component = {DetaliiSerial}/>
	</Switch>
);

export default Rute;