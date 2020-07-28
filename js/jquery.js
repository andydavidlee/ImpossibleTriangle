//Javascript 9 version
//Edited in Dreamweaver CC 2019

//scrolling function for the header making the background solid opacity from nil to full as the user scrolls down the page.
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});