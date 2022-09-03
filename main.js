fabrica = new fabric.Canvas('myCanvas');
lapiz_x = 10;
lapiz_y = 10;
block_image_width = 200;
block_image_height = 300;
lapiz_object= "";
block_image_object= "";
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:lapiz_y,
		left:lapiz_x
	});
	fabrica.add(block_image_object);
	});

}
function lapiz_update()
{
	fabric.Image.fromURL("lapiz.png", function(Img) {
	lapiz_object = Img;

	lapiz_object.scaleToWidth(150);
	lapiz_object.scaleToHeight(140);
	lapiz_object.set({
	top:lapiz_y,
	left:lapiz_x
	});
	canvas.add(lapiz_object);

	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
power = e.keyCode;
console.log(power);
if(power == '38')
	{
		up();
		console.log("up");
	}
	if(power == '40')
	{
		down();
		console.log("down");
	}
	if(power == '37')
	{
		left();
		console.log("left");
	}
	if(power == '39')
	{
		right();
		console.log("right");
	}
    if(power == '82')
	{
		new_image('amarillo.png'); 
		console.log("r");
	}
	if(power == '71')
	{
		new_image('azul.png'); 
		console.log("g");
	}
	if(power == '89')
	{
		new_image('rojo.jpg'); 
		console.log("y");
	}
	if(power == '80')
	{
		new_image('rosa.png'); 
		console.log("p");
	}
    if(power == '66')
	{
		new_image('verde.png'); 
		console.log("b");
	}
}
function up()
{
	if(lapiz_y >=0)
	{
		lapiz_y = lapiz_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + lapiz_x + " , Y = "+lapiz_y);
		canvas.remove(lapiz_object);
		lapiz_update();
	}
}

function down()
{
	if(lapiz_y <=500)
	{
		lapiz_y = lapiz_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + lapiz_x + " , Y = "+lapiz_y);
		canvas.remove(lapiz_object);
	lapiz_update();
	}
}

function left()
{
	if(lapiz_x >0)
	{
		lapiz_x = lapiz_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + lapiz_x + " , Y = "+lapiz_y);
		canvas.remove(lapiz_object);
		lapiz_update();
	}
}

function right()
{
	if(lapiz_x <=850)
	{
		lapiz_x = lapiz_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + lapiz_x + " , Y = "+lapiz_y);
		canvas.remove(lapiz_object);
		lapiz_update();
	}
}