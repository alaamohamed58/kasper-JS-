// toggle
document.querySelector(".toggle-menu").onclick = function(a){
    if(document.querySelector("nav ul").style.transform === "scaleX(0)"){
        document.querySelector("nav ul").style.transform = "scaleX(1)";
        this.classList.add("active");
        
    }else{ 
        document.querySelector("nav ul").style.transform = "scaleX(0)";
        this.classList.remove("active");

    }
}

//search button
var searchButton = document.querySelector(".seach-button");
var inputSearch = document.querySelector("#seach");

searchButton.onclick = function(){
    inputSearch.classList.toggle("unactive");
    inputSearch.style.transition = "1s";
}
//slider
//get elements
var slider = Array.from(document.querySelectorAll('.landing img')),
currentSlide = 3 , 
sliderLength = slider.length,
nextBtn = document.querySelector('.landing #next'),
preBtn = document.querySelector('.landing #previous');
nextBtn.onclick = nextImg;
preBtn.onclick = preImg;



let switcher = document.createElement('ul');
switcher.setAttribute('id', 'bullets');
for(var i = 1; i <= sliderLength; i++){
    let icons = document.createElement('li');
    icons.setAttribute('data-index', i);
    switcher.appendChild(icons);
    document.querySelector('.landing').appendChild(switcher);

};
var paginationUl = document.querySelector('.landing ul')
let liBullets = Array.from(document.querySelectorAll('#bullets li'));

checker();
function nextImg(){
    if(!nextBtn.classList.contains('disapled')){
        currentSlide++;
        checker();
    }
 };
 function preImg(){
    if(!preBtn.classList.contains('disapled')){
        currentSlide--;
        checker();
    }
 }
function checker(){
    removeActive();
    slider[currentSlide - 1].classList.add('active');
    paginationUl.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1 ){
        preBtn.classList.add('disapled');
    }else{
        preBtn.classList.remove('disapled');

    };
    if(currentSlide == sliderLength ){
        nextBtn.classList.add('disapled');
    }else{
        nextBtn.classList.remove('disapled');

    };
   
    for(var i = 0; i < liBullets.length; i++){
        liBullets[i].onclick = function(){
            currentSlide = parseInt(this.getAttribute('data-index'));
            checker();
        } 
    }
   
};
function removeActive(){
    slider.forEach(function(img){
        img.classList.remove("active")
    });
    liBullets.forEach(function(li){
        li.classList.remove("active")
    });
    
};

setInterval(function(){
    if(currentSlide == sliderLength){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker();

    }
},3000);

//filter images
let switcherIMG = Array.from(document.querySelectorAll('.portfolio ul li')),
PortfolioImg = Array.from(document.querySelectorAll('.portfolio .img-box'));

switcherIMG.forEach((li) => {
    li.addEventListener('click', removeAct);
    li.addEventListener('click',rmvimg);
 
});


function removeAct(){
    switcherIMG.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}

function rmvimg(){
    PortfolioImg.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
   }

//
var skillSection = document.querySelector('#about').getBoundingClientRect().top;
var statsTop = document.querySelector('.stats').getBoundingClientRect().top;

let about = document.querySelector('.about .container');
//stats
let coeffe = document.getElementById('coeffe');
let projects = document.getElementById('projects');
let awards = document.getElementById('awards');
let mails = document.getElementById('mails');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
var srtinterState = false
let coeffeNum = setInterval(function(){
   if(srtinterState === true){
       count1++;
       coeffe.innerHTML = count1;
   } if(count1 == 420){
    clearInterval(coeffeNum)
   }

    
},10);

let projectsNum = setInterval(function(){
    if(srtinterState === true){
        count2++;
        projects.innerHTML = count1;
    } if(count1 == 240){
     clearInterval(projectsNum)
    }
},10);
let awardsNum = setInterval(function(){
    if(srtinterState === true){
        count2++;
        awards.innerHTML = count1;
    } if(count1 == 270){
     clearInterval(awardsNum)
    }
},10);
let mailsNum = setInterval(function(){
    if(srtinterState === true){
        count2++;
        mails.innerHTML = count1;
    } if(count1 == 130){
     clearInterval(mailsNum)
    }
},10);
let screenh = window.outerHeight;
var aboutSectop = document.querySelector('#about').getBoundingClientRect().top;

//scroll up
let topBtn = document.querySelector('.go-up');
window.onscroll = function(){
  this.scrollY >= 1000 ? topBtn.classList.add('show'): topBtn.classList.remove('show');
  let aboutSec = document.querySelector('#about').getBoundingClientRect().top;
  if(aboutSec <= screenh){
    about.classList.add('opacity');
}
    const sectionPos = document.querySelector('.skills').getBoundingClientRect().top;
   
    let skills = document.querySelectorAll('.ourskills span');
let values = [
    '90%',
    '80%',
    '75%',
    '90%'
];
   if(window.outerHeight > sectionPos){
       
       skills.forEach((prog, index) =>{
           prog.style.width = values[index]
       } )
   }else{
  return false }  ;

  //design
  if(aboutSectop > window.outerHeight){
    srtinterState = true;

}else{
    srtinterState = false;

}

};
topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

//portfolio
let imgPortfolio = Array.from(document.querySelectorAll('.portfolio img'));
let imgModal = document.querySelector('.portfolio .modal');
let imgContent = document.querySelector('.portfolio .modal img');
console.log(imgPortfolio);

imgPortfolio.forEach((img) => {
    img.onclick = function(){
        imgModal.style.display = "flex";
        imgModal.style.justifyContent = "center";
        imgModal.style.alignItems = "center";
        imgContent.src = this.src ;
    }
});
let close = document.querySelector('.portfolio .modal span');

close.onclick = function(){
    imgModal.style.display = "none";
}
let designText = document.querySelector('.design .texts');
let designSec = document.querySelector('.design');


if(window.scrollTo(1050, 0)){
  designText.classList.add('anim')
}
