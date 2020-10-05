import React from 'react';
import Jsx from './components/01-Jsx';
import Lista from './components/02-Lista';
import Formulario from './components/03-Formulario';
import FormHook from './components/04-ReactHookForm';

function App() {
	return (
		<div className="container mt-5">
			<h1>Hola JSX</h1>
			<Jsx />
			<Lista />
			<Formulario />
			<hr />
			<FormHook />
		</div>
	);
}

export default App;
