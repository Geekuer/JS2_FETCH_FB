// 리스트 불러오기
(function() {
	fetch('list').then(response => {
		response.text().then(text => {
			let items = text.split(', ');
			let tags = '';

			items.forEach(name => {
				let tag = '<li><a href="#!' + name + '" onclick="fetchPage(\'description/' + name.toLowerCase() + '\')">' + name + '</a></li>';
				tags += tag;
			});

			$('#nav').html(tags);
			$('a').css('color', 'blue');
		});
	});
})();



// 링크 클릭시 내용 변경
function fetchPage(name) {
	fetch(name).then(response => {
		response.text().then(text => {
			$('article').html(text);
			let bt_val = $('#night_day').val();

			if (bt_val === 'Night'){
				Links.setLinksColor('blue');

			} else {   
				Links.setLinksColor('powderblue');
			}
		});
	});
};

// 로그인 페이지로 이동 / 로그아웃
function loginPage(self) {
	if(self.value === 'Log in'){
		location.href='login.html'; // Move to log in page
		
	} else if(self.value === 'Log out') {
		FB.logout(response => {
			console.log('logout =>', response);
			checkLoginStatus(response);
		});
	}
};