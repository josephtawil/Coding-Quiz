var header = document.querySelector("#head");
var div = document.querySelector("#home");
var div1 = document.querySelector(".div");
var button = document.querySelector("#button");
var body = document.querySelector("#body");
body.setAttribute("style", "background:coral");
header.setAttribute("style", "font-size: 2.5em;font-family: Cursive;text-align: center;color:purple;display:block");
div.setAttribute("style", "font-family: Cursive;position:absolute;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);text-align:center; height: 50vh")
button.setAttribute("style", "border-radius: 10px;background:purple; color:white");
$(div1).append("<p>This is a quiz that will test your skill in coding. Try not to get any wrong</p>");

