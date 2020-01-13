'use strict';

(function ($) {
  $.fn.MyForm = function (options) {
    this.settings = $.extend({
      

      'el': $(this) || [],

      form:[],
      css:{
        margin:10,
        padding:10,
      }
    }, options);
    var el = this.settings.el;
    var css = this.settings.css;
    var priv = {};
    // Public Methods - External methods
    Object.assign(this, {
    
      /**
       * Generate form element with a value
       * @param {String} value
       */

      'generator':function(){
        //create form
         var form = $('<form></form>');
         $(el).append(form);
         $(form).append('<button type="submit">VALIDATION</button>');
         this.settings.form.forEach(function(value){

        //create input
          var input = jQuery('<input></input>');
          $(input).attr("type", value.type);
          $(input).attr('required', value.required);
          $(input).attr('placeholder', value.options.placeholder);
          var regex = new RegExp (value.options.validRegex);
          input.on("change", function(){
           
           if(regex.test(input.val())){
        
            //param good
            $(input).css('color', '#7AD02E');
            
           } else {
            //param bad
            $(input).css("color", "#ff123f");

           }
         })
         $('form').append(input);
           
        })
      },
      
    });
       

  
    // Private Methods - Internal methods
    Object.assign(priv, {

      //style css
      'style': function () {
        el.css({
          'padding': 10,
          'fontSize': 15,
          'border-radius': 5,
          'border': '1px solid #eaeaea',
        });

        return this;
      },

      
      
       /**
       * Initialize the plugin
       */
      'init': function () {
       priv.style();
       //this.settings.el.append('<form></form>');
       el.attr('placeholder', this.settings.placeholder);
       this.generator();
       


       
    
      return this;
    }.bind(this)
  });
    // Initialise the plugin
    priv.init();
    return this;
  };
}(jQuery));