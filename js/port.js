const elements=document.querySelectorAll('.box');
elements.forEach((element)=>{
element.addEventListener('animationend',()=>{
    element.style.border='2px solid green';
})
})


var myButton=document.getElementById('myBtn');
window.onscroll=function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        myButton.style.display='block';
        myButton.style.bottom='100px';
        
    }else{
        myButton.style.display='none';
    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
function myFunction(){
    var x=document.getElementById('myTopnav');
    if(x.className==='topnav'){
        x.className+=' responsive';
    }else{
        x.className='topnav';
    }
    }
// to access all divisions
var divisions=document.querySelectorAll('.box');
var nav=document.querySelector('nav');
const fragment= document.createDocumentFragment();

divisions.forEach((division)=>{
    let a= document.createElement('a');
    var data=division.getAttribute('data-nav');
    a.textContent=data;
    const id = division.getAttribute('id'); 
    a.href='#'+ id;
   
a.addEventListener('click',scrollTosection);
function scrollTosection(event){
event.preventDefault();
a.href='#'+ id;
division.scrollIntoView({behavior:'smooth',block:'center'})
  }

fragment.appendChild(a); 
});

nav.appendChild(fragment);
var link1=document.querySelectorAll('a')[1];
link1.classList='hvr-bob hvr-glow active';
var divButton=document.createElement('div');
divButton.className='dropdown';
var button=document.createElement('button');
button.classList='dropbtn hvr-bob hvr-glow';
button.textContent='Portfolio';
var icon=document.createElement('i');
icon.classList='fa fa-caret-down';
button.appendChild(icon);
divButton.appendChild(button);
var link2=document.querySelectorAll('a')[2];
var link3=document.querySelectorAll('a')[3];
var link4=document.querySelectorAll('a')[4];
var link5=document.querySelectorAll('a')[5];
link2.className='group';
link3.className='group';
link4.className='group';
link5.className='group';
var links=document.querySelectorAll('.group');
var divLinks=document.createElement('div');
divLinks.className='dropdown-content';
links.forEach((link)=>{
    divLinks.appendChild(link);
    divButton.appendChild(divLinks);
  fragment.appendChild(divButton);  
})
nav.appendChild(fragment);



















