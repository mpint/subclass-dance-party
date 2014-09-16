var SpinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  var colors = ['40px solid blue', '60px dotted green', '30px double purple'];

  Dancer.prototype.step.call(this);

  this.setBorderColor(colors[(Math.floor(Math.random() * 3))]);
};

SpinDancer.prototype.setBorderColor = function(border) {

  var styleSetting = {
    border: border
  };

  this.$node.css(styleSetting);
  this.$node.addClass('rotate');
};
