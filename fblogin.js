function checkLoginStatus(response) {   // Called after the JS SDK has been initialized.
	//statusChangeCallback(response);        // Returns the login status.
	if (response.status === 'connected') {																		// If status === log in
		console.log(response.status);

		if (location.pathname === '/WEB2/' || location.pathname === '/WEB2/index.html') {		// If location === index.html
			FB.api('/me', function(response) {
				$('title').html('WEB2 - Welcome ' + response.name + '!');								// Change title
				$('#welcome').html('Welcome ' + response.name + '!');										// Welcome User

			});

			$('#login').val('Log out');																			// Change button log out

		} else if (location.pathname === '/WEB2/login.html') {											// If location === login.html
			location.href = 'index.html';																			// Move to index.html
		}

	} else {																												// If status === log out
		console.log(response.status);

		if (location.pathname === '/WEB2/' || location.pathname === '/WEB2/index.html') {		// If location === index.html
			$('title').html('WEB2 - Welcome');																	// Change title
			$('#welcome').html('');
			$('#login').val('Log in');																				// Change button log in

		} else if (location.pathname === '/WEB2/login.html') { 											// If location === login.html
			$('#facebookLogin').val('Login with Facebook');													// Change button log in
		}
	}
};

window.fbAsyncInit = function() {
	FB.init({
		appId      : '413452351375980',
		cookie     : true,                     																// Enable cookies to allow the server to access the session.
		xfbml      : true,                     																// Parse social plugins on this webpage.
		version    : 'v19.0'          																		 	// Use this Graph API version for this call.
	});

	FB.getLoginStatus(checkLoginStatus);
};

function testAPI() {                    																	  	// Testing Graph API after login.  See statusChangeCallback() for when this call is made.
	console.log('Welcome!  Fetching your information.... ');

	FB.api('/me', function(response) {
		console.log('Successful login for: ' + response.name);

		$('#status').html('Thanks for logging in, ' + response.name + '!');
	});
};

// 로그인 페이지에서 페이스북으로 로그인
function fbLogin(self) {
	if (self.value === 'Login with Facebook') {
		FB.login(response => {
			console.log('login =>', response);

			checkLoginStatus(response);
		});
		
	} else {
		FB.logout(response => {
			console.log('logout =>', response);

			checkLoginStatus(response);
		});
	}
};