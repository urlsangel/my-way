/**
 * @file project_namespace setup functions. Should be used to call plugins only - keep it light.
 */

// Create our only global object with the project namespace
// Search and replace project_namespace to one suited for the project
var project_namespace = project_namespace || {};

/*=====================================
  project_namespace vars
*/

// breakpoints - see _variables.scss
// always match up any changes in both files
project_namespace.breakpoint_inner = 565;
project_namespace.breakpoint_outer = 757;


/*=====================================
  Set breakpoint classes on the body
*/
project_namespace.setBreakpointClass = function(breakpoint, isOn) {
  isOn ? $.root.addClass('breakpoint-' + breakpoint) : $.root.removeClass('breakpoint-' + breakpoint);
};


/*=====================================
  Setup Main Nav in small screen view
*/
project_namespace.setupMainNavSmall = function() {
 // do setup code here, use plugins if at all possible
};


/*=====================================
  Conditionally load images for desktop view
*/
/**
*
* Some advantages of this approach over CSS background images:
* - We can scale the image in fluids layouts (background-size isn't available in < IE9)
* - We can display a subset of the dektop images without the file size overhead of a large sprite
* (at the cost of some extra - albeit async - HTTP requests)
*
* Note
* - As we're adding a JS dependency this technique should only be used if the image is considered 'decorative'
* - Decorative images shouldn't have any alt text, so search bots and assistive tech users aren't missing out on anything
* although we do have an option of adding surrogate 'alt text' inside the span that will be replaced with an image
*
* @TODO: As a small perf gain we could also define image sizes in extra data attrs then write width & height attrs onto the <img /> to minimise reflows/repaints
* Costs/caveats: this technique couldn't be applied to fluid/scaleable images, and it would add a small amount of redundant markup when the images aren't required
*/
project_namespace.loadDesktopImages = function() {

  $.root.find('[data-img-src]').each( function(){

    var $this = $(this),
        $imgClass = $this.attr('class'),
        $imgSrc = $this.data('img-src'),

        // Create image element
        $img = $('<img />')
                 .addClass($imgClass)
                 .attr('src', $imgSrc)
                 .attr('alt', '');
    
    // Add class to parent so we can apply CSS
    $this.parent().addClass('has-media');
    
    // Inject img into DOM in place of span
    $this.replaceWith($img);
  
  });

};
