window.onload = function(){
	setInterval (fSec, 1000);

    var sec = 0;
	function fSec() {
		document.querySelector('#arrow').style.transform = 'rotate('+sec+'deg)';
		if (sec == 354) {
			sec = 0;
		} else {
			sec = sec + 6;
		}
		
	}
}