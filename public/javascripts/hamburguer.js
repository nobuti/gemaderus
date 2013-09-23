(function(ns){
  var tip = document.querySelector('.hamburguer'),
      dropdown = document.querySelector('header nav .menu');

  var handler = function(e){
    toggleClass(dropdown, 'open');
    toggleClass(tip, 'open');
    return false;
  };

  addEvent(tip, 'click', handler);

})(window);