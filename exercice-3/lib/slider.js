'use strict';

(function ($) {
  $.fn.MySlide = function (options) {
    this.settings = $.extend({
      'el': $(this) || [],
      
    }, options);

    var el = this.settings.el;
    var priv = {};

    // Public Methods - External methods
    Object.assign(this, {

        'slider':function() {
          
          var slider = jQuery('<div id="slide"></div>');
          var container = jQuery('<div id="container"></div>');
          var prev = jQuery('<a id="prev"></a>');
          var next = jQuery('<a id="next"</a>');

          $(el).append(slider);
          $(slider).append(container);
          $(slider).append(prev);
          $(slider).append(next);
            
          $.each(this.settings.slide, function(index, value) {
            var slide = jQuery('<div id="slide"></div>')
            var img = jQuery('<img src='+value+'>');
            //console.log(value);
            $(slide).append(img);
            $(container).append(slide);
          }.bind(this))
        
       
       
        },
      });
   
        
  
    

    // Private Methods - Internal methods
    Object.assign(priv, {
      'init': function () {
        console.log('Hello');
      }.bind(this)
    });

    // Initialise the plugin
    priv.init();
    
    this.slider();
    return this;
  };
}(jQuery));