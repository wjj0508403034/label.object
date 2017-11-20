'use strict';

angular.module('label.object').factory("Pen", ["HuoYunWidgetCore",
  function(HuoYunWidgetCore) {

    const Default_Stroke = {
      color: '#f06',
      width: 1,
      linecap: 'round'
    };

    function Pen(options) {

    }

    Pen.prototype.getStroke = function() {
      if (!this.$$stroke) {
        this.$$stroke = angular.copy(Default_Stroke);
      }

      return this.$$stroke;
    };

    Pen.prototype.setColor = function(color) {
      this.getStroke().color = color;
      return this;
    };

    Pen.prototype.setWidth = function(width) {
      this.getStroke().width = width;
      return this;
    };

    Pen.prototype.setLinecap = function(linecap) {
      this.getStroke().linecap = linecap;
      return this;
    };

    return Pen;
  }
]);