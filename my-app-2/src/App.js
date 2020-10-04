import React from 'react';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/ReactHookForm';

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
