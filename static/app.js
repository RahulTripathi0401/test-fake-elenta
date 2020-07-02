const axios = require('axios');

const Users = {
	User1: {
		name: 'Test1',
		email: 'rahul.tripathi@elenta.io',
		password: 'rahul.tripathi@elenta.io'
	},
	User2: {
		name: 'Test2',
		email: 'rahul.tripathi+1@elenta.io',
		password: 'password'
	}
};

const username = document.getElementById('submit');
username.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const pwd = document.getElementById(password).value;
});
