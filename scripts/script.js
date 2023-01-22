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
