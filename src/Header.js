import React from 'react';

const Header = () => {
	return (
		<header>
			<div class='topic-div'>
				<h1 class='main-topic'>Personal Resume</h1>
			</div>
			<div class='main-header'>
				<img src='https://i.imgur.com/dANNfLT.jpg' alt='Sally Picture' />
				<section class='intro'>
					<h2>Sally</h2>
					<h3>Job intention: Front end developer</h3>
				</section>
				<address class='contact'>
					<ul>
						<li>
							Email: <a href='mailto:sally@student.com'>Sally</a>
						</li>
						<li>Phone: 218-678-888</li>
						<li>Address: 4739 Aaron Smith Houston, Tx 78001.</li>
						<li>Facebook: @sally</li>
					</ul>
				</address>
			</div>
		</header>
	);
};

export default Header;
