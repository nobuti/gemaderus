(function(ns){

  var menu = $('header nav');

  var handler = function(e){
    e.preventDefault();
    menu.toggleClass('open');
  };

  $('.hamburguer').on('click', handler);

})(window);