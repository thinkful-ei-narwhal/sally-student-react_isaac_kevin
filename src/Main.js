import React from 'react';

const Main = () => {
	return (
		<main>
			<section class='education'>
				<h2>Education</h2>

				<h3>
					Universty of Houston <span>BSC. Computer Science, 2018</span>
				</h3>
				<ul>
					<li>Dean's lister for 8 semesters</li>
					<li>Cumulative GPA of 3.7</li>
					<li>Member of the honoring society</li>
				</ul>
			</section>
			<hr />
			<section class='employment-history'>
				<h2>Employment history</h2>

				<div class='job'>
					<h3>
						UX designer <span>Erison global, 2017 - 2019</span>
					</h3>
					<p>
						Donec sed viverra orci. Integer egestas bibendum semper. Praesent
						eget nisl sed nisi semper rutrum eget ac nisl. Fusce varius, lacus
						nec interdum fringilla, ex tellus volutpat neque, et consequat nisi
						leo sed nulla. Morbi in dapibus ante, non rutrum tellus. Aliquam vel
						rhoncus eros. Nunc non metus condimentum, vehicula urna in, pretium
						quam. Vestibulum commodo, nisi a tincidunt mollis, tortor est.
					</p>
				</div>
				<div class='job'>
					<h3>
						Front end developer <span>Mark and Sons, 2019 - present</span>
					</h3>
					<p>
						Nulla augue nisi, efficitur quis molestie nec, tincidunt sed tellus.
						Vivamus vel lorem id sapien vulputate vestibulum. Nam tempor risus
						at elementum viverra. Morbi ac ullamcorper odio, quis rutrum est.
						Nunc et efficitur purus. Nullam pulvinar sapien in gravida
						ullamcorper. Sed et quam finibus, tristique lectus sed, ornare
						tortor. Quisque bibendum pulvinar elit. Nullam quis faucibus purus.
						gravida ullamcorper. Sed et quam finibus, tristique lectus sed,
						ornare tortor. Quisque bibendum pulvinar elit. Nullam quis faucibus
						purus.
					</p>
				</div>
			</section>
			<hr />
			<section class='skills'>
				<h2>Proffesional Skills</h2>
				<ul>
					<li>HTML 5</li>
					<li>CSS 3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React .js</li>
					<li>Python 3</li>
				</ul>
			</section>
		</main>
	);
};

export default Main;
