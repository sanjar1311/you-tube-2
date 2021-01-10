var $_ = function(selector, node = document) {
  return node.querySelector(selector);
}

var $$_ = function(selector, node = document) {
  return node.querySelectorAll(selector);
}

var createElement = function(element, elementClass, elementText) {
  var newElement = document.createElement(element);

  if(elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if(elementText) {
    newElement.textContent = elementText;
  }

  return newElement;
}


var videos = [
  {
    title: 'Ocean',
    day: '2 weeks ago',
    views: '1 view',
    duration: '12:05',
    author: 'Gussie Singleton',
    img: 'https://picsum.photos/id/774/250/150',
    id: '1q'
  },
  {
    title: 'Mountain',
    day: '14 days ago',
    views: '80k views',
    duration: '15:15',
    author: 'Gussie Singleton',
    img: 'https://picsum.photos/id/664/250/150',
    id: '1w'
  },
  {
    title: 'Bridge',
    day: '1 day ago',
    views: '8 views',
    duration: '20:00',
    author: 'Gussie Singleton',
    img: 'https://picsum.photos/id/554/250/150',
    id: '1e'
  },
  {
    title: 'Beach in Malaysia',
    day: '1 weeks ago',
    views: '10 view',
    duration: '1:05',
    author: 'Gussie Singleton',
    img: 'https://picsum.photos/id/77/250/150',
    id: '1r'
  }
];

var watchLater = [];


var elMenuBtn = $_('.site-header__menu-btn');
var elMain = $_('.main');
var elFisrstUserVideos = $_('.js-first-user-videos');
var elGussie = $_('.js-gussie');
var elNora = $_('.js-nora');
var elBelle = $_('.js-belle');
var elEunice = $_('.js-eunice');
var elUserPic = $_('.site-header__user-menu-btn');
var elFirstLineUser = $_('.firs-line__user');
var elFirstLineUserTitle = $_('.first-line__user-title');
var elWatchLater = $_('.left-side__watch-later-btn');
var elWatchLaterOutput = $_('.js-watch-later-output');
var elFavouriteList = $_('.js-favourites__list');
var elVideoItemTemplate = $_('.first-line-template').content;


var displayVideo = function(array, output) {
  var videoItemFragment = document.createDocumentFragment();
  output.innerHTML = '';
  for(var i = 0; i < array.length; i++) {
    var videoItem = elVideoItemTemplate.cloneNode(true);
    $_('.video__title', videoItem).textContent = array[i].title;
    $_('.video__views', videoItem).textContent = array[i].views;
    $_('.video__time', videoItem).textContent = array[i].day;
    $_('.video__author', videoItem).textContent = array[i].author;
    $_('.video__img', videoItem).src = array[i].img;
    $_('.video__duration', videoItem).textContent = array[i].duration;
    $_('.video__add', videoItem).dataset.id = array[i].id;

    videoItemFragment.appendChild(videoItem);
  }
  output.appendChild(videoItemFragment);
}


elMenuBtn.addEventListener('click', function() {
  elMain.classList.toggle('active');
});

var localStorages = JSON.parse(localStorage.getItem('arrey'));
if(localStorages) {
  displayVideo(localStorages, elFisrstUserVideos);
}
if(localStorage.getItem('subscImg') && localStorage.getItem('subscTitle')) {
  elFirstLineUser.src = localStorage.getItem('subscImg');
  elFirstLineUserTitle.textContent = localStorage.getItem('subscTitle');
}

elGussie.addEventListener('click', function() {

  elFirstLineUser.src = "https://picsum.photos/id/786/70/70";
  elFirstLineUserTitle.textContent = 'Gussie Singleton';

  displayVideo(videos, elFisrstUserVideos);

  localStorage.setItem('arrey', JSON.stringify(videos));
  localStorage.setItem('subscImg', "https://picsum.photos/id/786/70/70");
  localStorage.setItem('subscTitle', 'Gussie Singleton');
});

elFisrstUserVideos.addEventListener('click', function(evt) {
  for(var i = 0; i < videos.length; i++) {
    if(evt.target.dataset.id === videos[i].id) {
      if(!watchLater.includes(videos[i])) {
        watchLater.push(videos[i]);
      }
    }
  }
  localStorage.setItem('watchL', JSON.stringify(watchLater));
});

var watchLaterLS = JSON.parse(localStorage.getItem('watchL'));
if(watchLaterLS){
  displayVideo(watchLaterLS, elWatchLaterOutput);
}
if(localStorage.getItem('watchImg') && localStorage.getItem('watchTitle')) {
  watchLaterImg.src = localStorage.getItem('watchImg');
  watchLaterImg.textContent = localStorage.getItem('watchTitle');
}


elWatchLater.addEventListener('click', function() {
  var watchLaterImg = $_('.first-line__watch-later-img');
  watchLaterImg.src = 'img/watch-later.png';
  var watchLaterTitle = $_('.first-line__watch-later-title');
  watchLaterTitle.textContent = 'Watch later';
  localStorage.setItem('watchImg', 'img/watch-later.png');
  localStorage.setItem('watchTitle', 'Watch later');

  displayVideo(watchLater,elWatchLaterOutput);
});
