
$(document).ready(function()
{
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://scriptlocation/das.js";
    // Use any selector
    $("head").append(s);
});
