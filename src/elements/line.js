'use strict';

angular.module('label.object').factory("Line", ["HuoYunWidgetCore", "Graph", "Point",
  function(HuoYunWidgetCore, Graph, Point) {

    function Line() {
      Graph.apply(this, arguments);
    }

    HuoYunWidgetCore.ClassExtend(Line, Graph);

    Line.prototype.setPoint1 = function(x, y) {
      this.$$point1 = new Point(x, y);
      return this;
    };

    Line.prototype.getPoint1 = function() {
      return this.$$point1;
    };

    Line.prototype.setPoint2 = function(x, y) {
      this.$$point2 = new Point(x, y);
      return this;
    };

    Line.prototype.getPoint2 = function() {
      return this.$$point2;
    };

    Line.prototype.values = function() {
      return [this.getPoint1().value(), this.getPoint2().value()];
    };

    Line.prototype.getSvgGraph = function() {
      if (!this.$$line) {
        this.$$line = this.getSvg().line().stroke(this.getPen().getStroke());
      }

      return this.$$line;
    };

    return Line;
  }
]);