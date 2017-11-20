'use strict';

angular.module('label.object').factory("Rect", ["HuoYunWidgetCore", "Graph", "Point",
  function(HuoYunWidgetCore, Graph, Point) {

    function Rect() {
      Graph.apply(this, arguments);
    }

    HuoYunWidgetCore.ClassExtend(Rect, Graph);

    Rect.prototype.setStartPoint = function(x, y) {
      this.$$startPoint = new Point(x, y);
      return this;
    };

    Rect.prototype.getStartPoint = function() {
      return this.$$startPoint;
    };

    Rect.prototype.setEndPoint = function(x, y) {
      this.$$endPoint = new Point(x, y);
      return this;
    };

    Rect.prototype.getEndPoint = function() {
      return this.$$endPoint;
    };

    Rect.prototype.getWidth = function() {
      return Math.abs(this.getEndPoint().getX() - this.getStartPoint().getX());
    };

    Rect.prototype.getHeight = function() {
      return Math.abs(this.getEndPoint().getY() - this.getStartPoint().getY());
    };

    Rect.prototype.values = function() {
      var values = [];
      values.push(this.getStartPoint().value());
      values.push([this.getStartPoint().getX(), this.getEndPoint().getY()]);
      values.push(this.getEndPoint().value());
      values.push([this.getEndPoint().getX(), this.getStartPoint().getY()]);
      values.push(this.getStartPoint().value());
      return values;
    };

    Rect.prototype.getSvgGraph = function() {
      if (!this.$$rect) {
        this.$$rect = this.getSvg().polyline().fill("rgba(109, 33, 33, 0.25)").stroke(this.getPen().getStroke());
      }

      return this.$$rect;
    };

    return Rect;
  }
]);