'use strict';

angular.module('label.object').factory("Graph", ["HuoYunWidgetCore", "Pen",
  function(HuoYunWidgetCore, Pen) {

    function Graph() {

    }

    Graph.prototype.getPen = function() {
      if (!this.$$pen) {
        this.$$pen = new Pen();
      }
      return this.$$pen;
    };

    Graph.prototype.setPen = function(pen) {
      this.$$pen = pen;
      return this;
    };

    Graph.prototype.setStoryBoard = function(storyBoard) {
      this.$$storyBoard = storyBoard;
      return this;
    };

    Graph.prototype.getStoryBoard = function() {
      return this.$$storyBoard;
    };

    Graph.prototype.getSvg = function() {
      return this.getStoryBoard() && this.getStoryBoard().getSvg();
    };

    Graph.prototype.draw = function() {
      this.getSvgGraph().plot(this.values());
      return this;
    };

    Graph.prototype.move = function() {

    };

    return Graph;
  }
]);