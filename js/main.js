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

var localStorages = JSON.parse(localStorage.getItem('arrey'))
if(localStorages) {
  displayVideo(videos, elFisrstUserVideos);
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
});

elWatchLater.addEventListener('click', function() {
  $_('.first-line__watch-later-img').src = 'img/watch-later.png';
  $_('.first-line__watch-later-title').textContent = 'Watch later';
  displayVideo(watchLater,elWatchLaterOutput);
});



















































// var videos = [
//   {
//     title: 'Pirates of the Caribbean 5',
//     day: '2 weeks ago',
//     views: '1 view',
//     duration: '12:05',
//     author: 'Gussie Singleton',
//     img: 'img/user-1_2.jpg',
//     id: 1
//   },
//   {
//     title: 'Pirates of the Caribbean',
//     day: '14 days ago',
//     views: '80k views',
//     duration: '15:15',
//     author: 'Gussie Singleton',
//     img: 'img/user-1_1.webp',
//     id: 0
//   },
//   {
//     title: 'Pirates of the Caribbean 6 Trailer',
//     day: '1 day ago',
//     views: '8 views',
//     duration: '20:00',
//     author: 'Gussie Singleton',
//     img: 'img/user-1_3.jpg',
//     id: 2
//   }
// ];
// var favourite = [];



// var outputFunc = function(arrey) {

//   elUserPic.classList.add('site-header__gussie');
//   elFirstLineUser.textContent = 'Gussie Singleton';
//   $_('.first-line__inner').classList.add('first-line__inner--active');

//   var firstLineTemplate = $_('.first-line-template').content;
//   var videoFragment = document.createDocumentFragment();

//   elFisrstLineList.innerHTML = '';
//   for(var i = 0; i < arrey.length; i++) {
//     var firstLineItem = firstLineTemplate.cloneNode(true);
//     var videoTitle = $_('.video__title', firstLineTemplate);
//     videoTitle.textContent = arrey[i].title;
//     videoTitle.setAttribute('class', 'video__title');
//     var videoViews = $_('.video__views', firstLineTemplate);
//     videoViews.textContent = arrey[i].views;
//     videoViews.setAttribute('class', 'video__views');
//     var videoTime = $_('.video__time', firstLineTemplate);
//     videoTime.textContent = arrey[i].day;
//     videoTime.setAttribute('class', 'video__time');
//     var videoAuthor = $_('.video__author', firstLineTemplate);
//     videoAuthor.textContent = arrey[i].author;
//     videoAuthor.setAttribute('class', 'video__author');
//     var videoDuration = $_('.video__duration', firstLineTemplate);
//     videoDuration.textContent = arrey[i].duration;
//     videoDuration.setAttribute('class', 'video__duration');
//     var videoImg = $_('.video__img', firstLineTemplate);
//     videoImg.setAttribute('src', arrey[i].img);
//     var videoAddBtn = $_('.video__add', firstLineItem);
//     // videoAddBtn.setAttribute('dataset', arrey[i].id)
//     // videoAddBtn.dataset.id = ;

//      videoFragment.appendChild(firstLineItem);
//   }
//   elFisrstLineList.appendChild(videoFragment);
// }

// /* ========== Videos Output ========== */

// var videosL = JSON.parse(localStorage.getItem('arrey'));
// if(videosL) {
//   outputFunc(videos);
// }

// elGussie.addEventListener('click', function() {

//   outputFunc(videos);

//   localStorage.setItem('arrey', JSON.stringify(videos));
// });


// /* ======== Add Favourite ========= */
// elFisrstLineList.addEventListener('click', function(evt) {

//   var firstLineTemplate = $_('.first-line-template').content;
//   var firstLine = firstLineTemplate.cloneNode(true);
//   var videoAdd = $_('.video__add', firstLine);

//   if(evt.target.matches('.video__add')){
//     for(var i = 0; i < videos.length; i++) {
//       if(videos[i].id === Number(evt.target.dataset.id)){
//         var index = Number(evt.target.dataset.id);
//         favourite.push(videos[index]);
//       }
//     }
//   }
//   console.log(favourite);

// });


//           /* ========= Output Favourites ========== */
// elWatchLater.addEventListener('click', function(){

//   var elFavouriteSection = $_('.favourites');
//   elFavouriteSection.classList.add('first-line__inner--favo');

//   elFavouriteList.innerHTML = '';

//   var favouriteFragment = document.createDocumentFragment();
//   var firstLineTemplate = $_('.first-line-template').content;

//   for(var i = 0; i < favourite.length; i++) {
//     var favouriteItem = firstLineTemplate.cloneNode(true);

//     favouriteFragment.appendChild(favouriteItem);
//   }
//   elFavouriteList.appendChild(favouriteFragment);

// });