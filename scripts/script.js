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

//var tabs = document.getElementById('main');
//tabs.addEventListener("click", function(ev) {
 // var hideElement = document.getElementsByClassName('no-display');
 // for (i = 0; i < hideElement.length; i++) {
  //  hideElement[i].classList.remove("active")
 // }
 // var showElemtn = document.querySelectorAll('div#' + ev.target.id + '')[0];
// showElemtn.classList.toggle("active");

 // return false;
//});

  var pages = document.querySelectorAll('.pages-roads'),
    divs = pages[0].querySelectorAll('div'),
    i = 0, j = 0;

    down.onclick = function() {
      divs[i].style.display="none";
      i = (i < (divs.length - 1))?i+1:0;
      if(i == 0) {    // здесь как-бы загрузка предыдущей страницы
        j = (j > 0)?j -1:pages.length - 1;
        divs = pages[j].querySelectorAll('div')
      }
      divs[i].style.display="block";
    }
    up.onclick = function() {
      divs[i].style.display="none";
      i = (i > 0)?i -1:divs.length - 1;
      if(i == divs.length - 1) { // здесь как-бы загрузка следующей страницы
        j = (j < (pages.length - 1))?j+1:0;
        divs = pages[j].querySelectorAll('div');
        i = divs.length - 1;
      }
      divs[i].style.display="block";
    }

    var selector = '.bikes__links a';

    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });




    /*$('#motorway-bikes').click(function(){
      $('.content-bikes').load('bikes-roads.html #motorway-bike-item');
    });

    $('#gravel-bikes').click(function(){
      $('.content-bikes').load('bikes-roads.html #gravel-bike-item');
  });

    $('#tt-bikes').click(function(){
      $('.content-bikes').load('bikes-roads.html #tt-bike-item');
    });

    /*$( "button" ).click(function() {
      $( "div" ).each(function( index, element ) {
        // element == this
        $( element ).css( "backgroundColor", "yellow" );
        if ( $( this ).is( "#stop" ) ) {
          $( "span" ).text( "Stopped at div index #" + index );
          return false;
        }
      });
    });*/


    /*$(document).ready(function(){
         var url=document.location.href;
          $.each($(".bikes__link a"),function(){
          if(this.href==url){$(this).addClass('active');};
         });
      });*/


    /*function setNewEntry(entry) {
      $('#motorway-bike').html(getNewEntry($('#motorway-bike').html(), entry));
  }

    function setNewEntry(entry) {
      $('#gravel-bike').html(getNewEntry($('#gravel-bike').html(), entry));
  }

    function setNewEntry(entry) {
      $('#tt-bike').html(getNewEntry($('#tt-bike').html(), entry));
  }*/


    /*var pages = document.querySelectorAll('.pages-bikes'),
    divs = pages[0].querySelectorAll('div'),
    i = 0, j = 0;

    down.onclick = function() {
      divs[i].style.display="none";
      i = (i < (divs.length - 1))?i+1:0;
      if(i == 0) {    // здесь как-бы загрузка предыдущей страницы
        j = (j > 0)?j -1:pages.length - 1;
        divs = pages[j].querySelectorAll('div')
      }
      divs[i].style.display="block";
    }
    up.onclick = function() {
      divs[i].style.display="none";
      i = (i > 0)?i -1:divs.length - 1;
      if(i == divs.length - 1) { // здесь как-бы загрузка следующей страницы
        j = (j < (pages.length - 1))?j+1:0;
        divs = pages[j].querySelectorAll('div');
        i = divs.length - 1;
      }
      divs[i].style.display="block";
    }*/



    //var divs = document.querySelectorAll('div'), i = 0;
    //down.onclick = function() {
      //divs[i].style.display="none";
      //i = (i < (divs.length - 1))?i+1:0;
      //divs[i].style.display="block";
    //}

    //up.onclick = function() {
      //divs[i].style.display="none";
      //i = (i > 0)?i-1:divs.length - 1;
      //divs[i].style.display="block";
    //}





//road-types experiment

//


