// Body 객체: 배경 색상 및 텍스트 색상을 변경하는 메서드를 포함합니다.
let Body = {
	setBackgroundColor: color => {
		$('body').css('backgroundColor', color);
	},
	
	setTextColor: color => {
		$('body').css('color', color);
	}
};

// Links 객체: 링크 색상을 변경하는 메서드를 포함합니다.
let Links = {
	setLinksColor: color => {
		$('a').css('color', color);
	}
};

// 낮과 밤을 전환하는 함수
function nightDayHandler(self) {
	if (self.value === 'Night') {
		Body.setBackgroundColor('black');
		Body.setTextColor('white');
		Links.setLinksColor('powderblue');
		self.value = 'Day';
		
	} else {
		Body.setBackgroundColor('white');
		Body.setTextColor('black');
		Links.setLinksColor('blue');
		self.value = 'Night';
	}
};