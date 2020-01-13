'use strict';

(function ($) {
  $.fn.MySearch = function (options) {
    this.settings = $.extend({
      'el': $(this) || []
    }, options);

    var el = this.settings.el;
    var priv = {};
    var pokemons = this.settings.pokemon;
    var p;
    // Public Methods - External methods
    Object.assign(this, {

      //generate element 

      'generator': function() {
        var form = jQuery('<form></form>');
        var div = jQuery('<div></div>');
        var input = jQuery('<input  type="text" placeholder="Search"></input>');
        var sub = jQuery('<input type="submit"></input>');

        $(el).append(form);
        $(form).append(div);
        $(div).append(input);
        $(div).append(sub);


      }, 
       //affiche le nom et l'image
       
      'showPokemon': function(value) {
        if ($('.Pokemons')) {
          $('.Pokemons').remove();
        }

        var Pokemons = jQuery('<div class="Pokemons"></div>');
        var p = jQuery("<p>"+ value.name  +"</p>");
        var img = jQuery("<img src='"+ value.img +"'>");

        $(el).append(Pokemons);
        $(Pokemons).append(p);
        $(Pokemons).append(img);
       
      },
        //give
      'PokemonSubmit': function(research) {
        $.each(pokemons, function(index,value) {
          if(research === value.name) {
            this.showPokemon(value);
          
          }
          
        }.bind(this))
      },
       //click the submit button for see pokemon
        
       'submit': function() {
        $('input[type=submit]').click(function() {
          this.PokemonSubmit($('input').val());
        }.bind(this))
      },


    });

    // Private Methods - Internal methods
    Object.assign(priv, {
      'init': function () {

       // console.log('Hello');
        this.generator();
        this.submit();

        
      }.bind(this)
    });

    // Initialise the plugin
    priv.init();
    
    return this;
  };
}(jQuery));