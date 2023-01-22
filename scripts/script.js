$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__burger-middle,.header__menu').toggleClass('active');
    $('.page').toggleClass('lock'); //I block page scroll while the menu is open step 15 css
  });
});
//toggle -- You click and class 'active' is added,
//you click again and the class is deleted
