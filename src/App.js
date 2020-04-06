import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className='App'>
			<Header name={'Sally'} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
