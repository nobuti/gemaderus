(function(ns){

  var menu = $('header nav'),
      brand = $('.brand');

  var handler = function(e){
    e.preventDefault();
    menu.toggleClass('open');
    brand.toggleClass('open');
  };

  $('.hamburguer').on('click', handler);

})(window);