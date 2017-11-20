'use strict';

angular.module('label.object').factory("StoryBoard", ["HuoYunWidgetCore", "$templateCache", "Line", "Rect",
  function(HuoYunWidgetCore, $templateCache, Line, Rect) {

    function StoryBoard(options) {
      HuoYunWidgetCore.Control.apply(this, arguments);
    }

    HuoYunWidgetCore.ClassExtend(StoryBoard, HuoYunWidgetCore.Control);

    StoryBoard.prototype.getTemplate = function() {
      return angular.element($templateCache.get("labelobject/story.board.template.html"));
    };

    StoryBoard.prototype.bindElement = function(element) {
      element.append(this.getTemplate().attr("id", this.getSvgId()));

      this.$$svg = SVG(this.getSvgId()).size("100%", "100%");
      return this.$$svg;
    };

    StoryBoard.prototype.getSvg = function() {
      return this.$$svg;
    };

    StoryBoard.prototype.getSvgId = function() {
      return `svg_${this.getId()}`;
    };

    StoryBoard.prototype.createLine = function() {
      return new Line().setStoryBoard(this);
    };

    StoryBoard.prototype.createRect = function() {
      return new Rect().setStoryBoard(this);
    };

    return StoryBoard;
  }
]);