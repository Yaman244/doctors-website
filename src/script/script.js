let menuButton = document.querySelector('.nav-toggle');
let menuLinks = document.querySelector('.nav-links');
let hamburger = document.querySelector('.toggle');
            
menuButton.addEventListener('click', ()=>{
        hamburger.classList.toggle('activ')
    if(hamburger.classList.contains('activ')){
    menuLinks.style.height = 300 +'px';
    }else{
    menuLinks.removeAttribute('style');
    }
});

//imgs
let gallery = document.querySelectorAll('.gallery');
let dots = document.querySelector('.gallery-items');

//append the number of dots == the gallery imgs number 
function appendDots() {
    for(let i = 0 ; i < gallery.length ; i++){
        let dot = document.createElement('div');
        dot.classList.add('item')
        dot.setAttribute('data-numid', i)
        dots.append(dot);
    }
};
appendDots();
let itemsNum = document.querySelectorAll('.gallery-items .item');
itemsNum[0].classList.add('activ');

let galleryTextContent = [{id: 0, data :" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nulla similique nostrum magni numquam dolore earum illum alias beatae sunt, eum a deleniti error eaque accusantium autem ad recusandae quasi!", hh:"feelings are not facts"}, 
{id: 1, data :" eum a deleniti error eaque accusantium autem ad recusandae quasi!",hh:"what happens under the operation "},
{id: 2, data :" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nulla similique nostrum magni numquam dolore earum illum alias beatae sunt, ",hh:"ethics: how to be a good doctor"},
{id: 3, data :" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nulla similique nostrum magni numquam dolore earum illum alias beatae sunt, eum a deleniti error eaque accusantium autem ad recusandae quasi!",hh:"the benefits of chest x-ray"},
{id: 4, data :" Lorem ipsum, Animi nulla similique nostrum magni numquam dolore earum illum alias beatae sunt, eum a deleniti error eaque accusantium autem ad recusandae quasi!",hh:"10 facts you should know about tooth health"}];
let textWrapper = document.querySelector('.wrapper-content');

function changeCoverTitle (randomeNum) {
    let textWrapperContnent = galleryTextContent.map((e)=> {
        return `<h1>${e.hh} </h1> <p> ${e.data} </p>`;
    });
    textWrapper.innerHTML = textWrapperContnent[`${randomeNum}`];
};

changeCoverTitle(0);

setInterval(() => {
    let random = Math.floor(gallery.length * Math.random());

    gallery.forEach(e => {
        if(e.dataset.id == random){
            e.classList.remove('hidden')
        }else{
            e.classList.add('hidden')
        }
    });
//handling dots active and disactive 
    itemsNum.forEach((e) => {
        if(e.dataset.numid == random){
            e.classList.add('activ')
        }else {
            e.classList.remove('activ')
        }
    })
    changeCoverTitle(random);
}, 6000);

itemsNum.forEach((e)=> {
    e.addEventListener('click', pointer);
});

function pointer() {
    itemsNum.forEach((e)=> {
        e.classList.remove('activ');
        e.addEventListener('click', () => {
            e.classList.add('activ');
            gallery.forEach(it => {
                it.classList.add('hidden');
            })
            gallery.item(e.dataset.numid).classList.remove('hidden');
            changeCoverTitle(e.dataset.numid);
        });
    });
} ;

let aboutUsList = document.querySelectorAll('#list-nav li');
let aboutUsLstContent = document.querySelector('.list-contnet p');
let aboutUsLstarray = [ 
{id: 1 , text: 'Dicta, maxime, debitis exercitationem perspiciatis, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, maxime culpa accusantium vitae nihil asperiores fugit voluptatum repellendus itaque. Adipisci quae explicabo, rem debitis harum cupiditate quis.'}, 
{id: 2 , text: ' debitis exercitationem perspiciatis, culpa accusantium vitae nihil asperiores fugit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, maxime'}, 
{id: 3 , text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, maxime Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, maxime'}];

function returnMAtched(ele) {
    aboutUsLstarray.forEach(element => {
        if(ele == element.id){
            aboutUsLstContent.textContent = element.text;
        }
    });
}

function removeClass() {
    aboutUsList.forEach(element => {
        element.classList.remove('active');
    });
};

aboutUsList.forEach(e => {
    if(e.classList.contains('active')){
        returnMAtched(e.dataset.id);
    };
    e.addEventListener('click', () => {
        removeClass();
        e.classList.add('active');
        returnMAtched(e.dataset.id)
    })
});

let scrollToTop =document.getElementById('scrolltop');

scrollToTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
});