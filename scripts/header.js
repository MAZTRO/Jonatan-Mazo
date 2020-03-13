$(document).ready(function()
{
    $(window).scroll(function()
    {
        if ($(window).scrollTop() > 150)
        {
            $("header").addClass("header_scroll");
        }
        else
        {
            $("header").removeClass("header_scroll");
        }
    });

});
