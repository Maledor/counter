var Counter = {
  x:0,
    init: function(){
    Counter.cacheDom();
    Counter.addEventListeners();
    Counter.render();
  },
  cacheDom: function(){
    Counter.plus = document.querySelector('#plus');
    Counter.minus = document.querySelector('#minus');
    Counter.qty = document.querySelector('#qty');
  },
  render: function(){
    Counter.qty.innerHTML = Counter.x;
  },
  addEventListeners: function(){
    Counter.plus.addEventListener('click', Counter.plusOne);
    Counter.minus.addEventListener('click', Counter.minusOne);
  },
  plusOne: function(){
          Counter.x += 1;
    Counter.render();
  },
  minusOne: function(){
        Counter.x -= 1;
    Counter.render();
  },
};
Counter.init();
