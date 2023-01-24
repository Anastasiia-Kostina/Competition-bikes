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
$(document).scroll(function(){
  t = (30 - $(this).scrollTop())/100;
  if(t<0)t=0;
  $('.lead__sticky-cover_bottom').css({opacity: t});
  $('.lead__sticky-cover_top').css({opacity: t})
})
