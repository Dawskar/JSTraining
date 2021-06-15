var image = new Image();
image.crossOrigin = 'anonymous';
image.src = 'images/grandCanyon.jpg';

var div = document.getElementById("canvas");
div.onmouseover = function () {
    this.style.cursor="crosshair";
};

image.onload = function() {
  draw(this);
};

function draw(image) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

	var smooth = document.getElementById('smooth').getContext('2d');
	smooth.imageSmoothingEnabled = true;
	smooth.mozImageSmoothingEnabled = true;
	smooth.webkitImageSmoothingEnabled = true;
	smooth.msImageSmoothingEnabled = true;

	var pixelated = document.getElementById('pixelated').getContext('2d');
	pixelated.imageSmoothingEnabled = false;
	pixelated.mozImageSmoothingEnabled = false;
	pixelated.webkitImageSmoothingEnabled = false;
	pixelated.msImageSmoothingEnabled = false;

  var zoom_In = function(ctx, x, y) {
    ctx.drawImage(canvas,
									Math.min(Math.max(0, x - 5), image.width - 10),
									Math.min(Math.max(0, y - 5), image.height - 10),
									40, 40,
									0, 0,
									353, 235);
  };

  canvas.addEventListener('mousemove', function(event) {
		const x = event.layerX;
		const y = event.layerY;
    zoom_In(smooth, x, y);
    zoom_In(pixelated, x, y);
	});
}