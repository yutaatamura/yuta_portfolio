(function($) {
      // Animate to section when nav is clicked
       $('#right-menu a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        // if ($('header').hasClass('active')) {
        //     $('header, body').removeClass('active');
        // }
    }); 
});
    
    
    
    // // Create timeline
    // $('#experience-timeline').each(function() {

    //     $this = $(this); // Store reference to this
    //     $userContent = $this.children('div'); // user content

    //     // Create each timeline block
    //     $userContent.each(function() {
    //         $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
    //     });

    //     // Add icons to each block
    //     $this.find('.vtimeline-point').each(function() {
    //         $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
    //     });

    //     // Add dates to the timeline if exists
    //     $this.find('.vtimeline-content').each(function() {
    //         var date = $(this).data('date');
    //         if (date) { // Prepend if exists
    //             $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
    //         }
    //     });

    // });