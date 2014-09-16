var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  var colors = ['10px solid blue', '20px dotted green', '15px double purple'];

  Dancer.prototype.step.call(this);

  this.setBorderColor(colors[(Math.floor(Math.random() * 3))]);
};

ColorDancer.prototype.setBorderColor = function(border) {

  var styleSetting = {
    border: border
  };

  this.$node.css(styleSetting);
};
