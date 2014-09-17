var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.addClass('orbit carlton')
            .removeClass('dancer');
};
