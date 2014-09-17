var SpinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  var colors = ['40px solid blue', '60px dotted green', '30px double purple'];

  Dancer.prototype.step.call(this);
  this.$node.css({'border': colors[(Math.floor(Math.random() * 3))]})
            .addClass('rotate');
};
