'use strict';

const sliderBtn = document.querySelectorAll('.small_btn');
const slider = document.querySelector('.slider');
const img = ["url(../img/newbornbaby.jpg)",
             "url(../img/newbornbaby1.jpg)", 
             "url(../img/newbornbaby3.jpg)",
             "url(../img/newbornbaby4.jpg)",
             "url(../img/newbornbaby5.jpg)"
];

// newBorn.style.background = img[0];

let num = 1;

function changeBackground() {
	num++;
	if( num>=img.length) {
		num = 0;
	}
   // newBorn.style.background = "url(../img/newbornbaby3.jpg)";
   slider.style.background = img[num];
   slider.style.backgroundRepeat = 'no-repeat';
   slider.style.backgroundSize = 'cover';
   console.log('asdasdasdasdas');
}


for (let i = 0; i < sliderBtn.length; i++) {
   	sliderBtn[i].addEventListener('click', changeBackground);
   }

setInterval(changeBackground, 5000);


