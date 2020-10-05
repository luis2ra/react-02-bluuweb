import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {

	const sujeto1 = {
        nombre: 'Pedrito',
        imagen: 'https://via.placeholder.com/64',
        texto: 'Hi Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
	}
	
	const sujeto2 = {
        nombre: 'Juanito',
        imagen: 'https://via.placeholder.com/64',
        texto: 'Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
	}

	return (
		<div className="container mt-2">
			<h1>Components</h1>
			<Saludo persona="Juanito" />
			<Saludo persona="Luis" />
			<Comentario sujeto={ sujeto1 } />
			<Comentario sujeto={ sujeto2 } />
		</div>
	);
}

export default App;
