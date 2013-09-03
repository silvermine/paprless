// this is where your code that is directly related to extending
// jQuery goes. All other code should be abstracted to classes
// outside of this file. This file should not become very large
// because it should basically just instantiate an instance of
// your plugin component, add it to the given element(s) and then
// make sure the component runs on those elements.
$.fn.paprless = function(options) {

   var settings = $.paprless(options);

   this.each(function() {
      var $this = $(this);
      debug('paprless on: ' + $this.prop('tagName'));

      var component = new PaprLess($this, settings);
      $this.data('paprless', component);
      component.onAfterAdd();
   });

   return this;

};

// this is a jQuery static function you could do something with if you needed to
// for right now we are using it just to build a valid set of settings for our
// plugin
$.paprless = function(options) {

   // true for deep copy
   // {} so our defaults are not overridden
   var settings = $.extend(true, {}, $.paprless.defaults, options);
   settings = validateSettings(settings);
   return settings;

};
