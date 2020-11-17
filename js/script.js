console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = './css/style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = './css/blue-theme.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = './css/green-theme.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = './css/purple-theme.css'
  }
  
	if(mode == 'dark'){
		document.getElementById('theme-style').href = './css/dark-theme.css'
	}

	localStorage.setItem('theme', mode)
}
