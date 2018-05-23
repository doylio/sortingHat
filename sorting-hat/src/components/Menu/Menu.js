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
					
					<button id="menu-btn" onClick={onMenuButtonClick}>Continue</button>
				</div>
			</div>
		</div>
	);
}

export default Menu;