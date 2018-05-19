import React from 'react';
import Hat from '../Hat/Hat';
import 'tachyons';
import './Menu.css';

const Menu = ({onHatInputChange, onMenuButtonClick}) => {
	return (
		<div id="menu">
			<Hat width={750} height={750} number={0} menu={true} />
			<div id="menu-options">
				<div>
					<h2>Welcome to<br/> the Sorting Hat</h2>
					<br/>
					<p># of Hats</p>
					<p>(10-500)</p>
					<input type='number' min='10' max='500' onChange={onHatInputChange} />
					<br/>
					<button id="menu-btn" onClick={onMenuButtonClick}>Continue</button>
				</div>
			</div>
		</div>
	);
}

export default Menu;