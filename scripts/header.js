$(document).ready(function()
{
    $(window).scroll(function()
    {
        if ($(window).scrollTop() > 250)
        {
            $("header").addClass("header_scroll");
        }
        else
        {
            $("header").removeClass("header_scroll");
        }
    });

});
