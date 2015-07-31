/* Basically you should concatenate all your javascript and place it here. */
$("html").click(function () {
    var red = (Math.round(Math.random() * 255));
    var blue = (Math.round(Math.random() * 255));
    var green = (Math.round(Math.random() * 255));
    var a = Math.random();
    $("html").css("background-color", "rgba(" + red + ", " + blue + ", " + green + ", " + a + ")");
});

//function showType(type) {
	$("span").click(function () {
		console.log(this.innerText);

		if($("span").innerText !== this.InnerText) {
			alert("not the same!");
			$("span").css("display", "none");
		}
	});
//}