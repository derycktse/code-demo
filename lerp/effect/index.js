var images = new Array();
var currentLocation = 0;
var totalImages = 200;

for (var i = 1; i < totalImages; i++) {
    var img = new Image;
   
    var slug = '000' + i;
    
     img.src = 'https://s3.amazonaws.com/clearmotion/hero/high-min/frame'+ slug.slice(-3) +'-low.jpg'
    images.push(img);
}

var c = document.getElementById("background");
var ctx = c.getContext("2d");

var mouseWheel = function () {
    window.addEventListener('mousewheel', function (e) {
        e.preventDefault(); // No scroll

        // The following equation will return either a 1 for scroll down
        // or -1 for a scroll up
        var delta = Math.max(-1, Math.min(1, e.wheelDelta));

        // This code mostly keeps us from going too far in either direction
        if (delta == -1) currentLocation += 1;
        if (delta == 1) currentLocation -= 1;
        if (currentLocation < 0) currentLocation = 0;
        if (currentLocation >= (totalImages - 1)) currentLocation = (totalImages - 1);
        console.log("Current location " + currentLocation);

        // See below for the details of this function
        setImage(currentLocation);
    });
}

var setImage = function (newLocation) {
    // drawImage takes 5 arguments: image, x, y, width, height
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(images[newLocation], 0, 0, 1000, 1000);
}

images[0].onload = function () {
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(images[currentLocation], 0, 0, 1000, 1000);
    mouseWheel();
};