'use strict';

angular.module('label.object').factory("Point", [
  function() {

    function Point(x, y) {
      this.$$x = x;
      this.$$y = y;
    }

    Point.prototype.setX = function(x) {
      this.$$x = x;
      return this;
    };

    Point.prototype.getX = function() {
      return this.$$x;
    };

    Point.prototype.setY = function(y) {
      this.$$y = y;
      return this;
    };

    Point.prototype.getY = function() {
      return this.$$y;
    };

    Point.prototype.value = function() {
      return [this.getX(), this.getY()];
    };

    return Point;
  }
]);