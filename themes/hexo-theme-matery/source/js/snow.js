/*样式一*/
(function($){
	function draw(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px arial';
    for(var i = 0; i < drops.length; i++){
        ar text = texts[Math.floor(Math.random()*texts.length)];
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        var random=Math.random();
        var min=random>1/3?random:(1-random)/2;
        if(drops[i]*fontSize > canvas.height || min > 0.97){
            drops[i] = 0;
        }

         drops[i]++;
    }
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var texts = '01'.split('');
var fontSize = 12;
var columns = canvas.width/fontSize;
var drops = [];
for(var x = 0; x < columns; x++){
    drops[x] = 1;
}

})(jQuery);
$(function(){
    setInterval(draw, 26);;
});