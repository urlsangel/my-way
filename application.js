/**
 * Our project namespace.
 * Search and replace project_namespace to match the desired client/project namespace
 */

project_namespace.init = function() {

  /* Globally cache the jQuery reference to the document to avoid repeated lookups.
   * This should be used as the base of all document-wide
   * searches where a closer context isn't available e.g.
   * var $someElement = $.root.find(someSelector);
   */
  $.root = $(document.body);


  /*=====================================
   * Setup breakpoints
   *
   * Set up responsive breakpoint handlers using jquery.breakpoint.js
   * http://www.myjqueryplugins.com/jquery-plugin/breakpoint
   * Requires amended matchMedia.js to support IE8/7 https://github.com/benschwarz/matchMedia.js/commit/759810b55ffdf518d26ed87c95a6c1e1ec6ce1a1 
   */


  // Handler for smaller than breakpoint inner
  $.breakpoint({

    condition: function () 
    {
        return window.matchMedia('screen and (max-width:' + (project_namespace.breakpoint_inner - 1) + 'px)').matches;
    },

    enter: function () 
    {          
      // code to execute on entering breakpoint         

      // Maybe set a breakpoint class
      project_namespace.setBreakpointClass(project_namespace.breakpoint_inner, true);

      // example setup function   
      project_namespace.setupMainNavSmall();
    },

    exit: function () 
    {
      // code to execute on exiting breakpoint

      // Maybe remove a breakpoint class
      project_namespace.setBreakpointClass(project_namespace.breakpoint_inner, false);
    }

  });


	// Delegate .transition() calls to .animate()
	// if the browser can't do CSS transitions.
	if (!$.support.transition) $.fn.transition = $.fn.animate;

	/*=====================================
	Call modularised setup functions
	*/

  // example setup function
	project_namespace.loadDesktopImages();
    
};



/* Call the project_namespace init function
 * This syntax is equivalant to calling $(document).ready();
 */
$(function() {project_namespace.init();});
