$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__burger-middle,.header__menu,.mode-switcher').toggleClass('active');
    $('.page').toggleClass('lock'); //I block page scroll while the menu is open step 15 css
  });
});
//toggle -- You click and class 'active' is added,
//you click again and the class is deleted

$(document).ready(function() {
$('.mode-switcher__switch-btn').click(function(){
  $(this).toggleClass('switch-dark');
  $('.mode-switcher__light-pic,.mode-switcher__dark-pic').toggleClass('active');
});
});

//-----lead---- background when sticky
// https://translated.turbopages.org/proxy_u/en-ru.ru.77646c9b-63d062ea-dcd90422-74722d776562/https/stackoverflow.com/questions/17900892/how-to-make-background-colour-fade-in-when-div-is-scrolled-down
$(document).scroll(function(){
  t = (30 - $(this).scrollTop())/100;
  if(t<0)t=0;
  $('.lead__sticky-cover_top').css({opacity: t});
  $('.lead__sticky-cover_bottom').css({opacity: t});
});

//this doesn't help much but mb I screwed the function https://translated.turbopages.org/proxy_u/en-ru.ru.1bbd32c7-63d0ea2d-24bb8462-74722d776562/https/stackoverflow.com/questions/4188903/opposite-of-scrolltop-in-jquery
$.fn.scrollBottom = (function() {
  return $(document).height() - this.scrollTop() - this.height();

});
$(window).scrollBottom(300);

//----road-types----

var tabs = document.getElementById('road-types');
tabs.addEventListener("click", function(ev) {
  var hideElement = document.getElementsByClassName('no-display');
  for (i = 0; i < hideElement.length; i++) {
    hideElement[i].classList.remove("active")
  }
  var showElemtn = document.querySelectorAll('div#' + ev.target.id + '')[0];
  showElemtn.classList.toggle("active");
});



//road-types ecxperiment

function asArr(arrayLike) {
	return [].slice.call(arrayLike, 0)
}

function setActiveArticle(articlesNodes, activeArticleNode) {
	articlesNodes.forEach(function(articleNode) {
		if (articleNode === activeArticleNode) {
			articleNode.classList.add('current')
		} else {
			articleNode.classList.remove('current')
		}
	})
}

function getNextArticle(articlesNodes, articleNode) {
	var articleIndex = articlesNodes.indexOf(articleNode)
	var totalArticlesIndexes = articlesNodes.length - 1
	if (articleIndex === totalArticlesIndexes) {
		return articlesNodes[0]
	} else {
		return articlesNodes[articleIndex + 1]
	}
}

function getPrevArticle(articlesNodes, articleNode) {
	var articleIndex = articlesNodes.indexOf(articleNode)
	var totalArticlesIndexes = articlesNodes.length - 1
	if (articleIndex === 0) {
		return articlesNodes[totalArticlesIndexes]
	} else {
		return articlesNodes[articleIndex - 1]
	}
}

var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
function main() {
	var articlesNodes = asArr(document.querySelectorAll('.road-type li'))
	var nextNode = document.querySelector('.next')
	var prevNode = document.querySelector('.prev')

	console.log('got', articlesNodes)
	var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]

	setActiveArticle(articlesNodes, currentlyActiveArticle)

	nextNode.addEventListener('click', function () {
		var nextArticle = getNextArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, nextArticle)
    currentlyActiveArticle = nextArticle
	})

	prevNode.addEventListener('click', function () {
		var prevArticle = getPrevArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, prevArticle)
    currentlyActiveArticle = prevArticle
	})
}

main()
