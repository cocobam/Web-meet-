let canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d");
                
 let painting = false;

 function startPosition(a){
    painting = true;
    draw(a);
}

function finshedPosition(){
    painting =false;
    ctx.beginPath();
}
            
function draw(a){
    if(!painting) return;
    let S = document.getElementById("width").value
    ctx.lineWidth = S;
    ctx.lineCap = "round"; 

    let R = document.getElementById("R").value
    let G = document.getElementById("G").value
    let B = document.getElementById("B").value
 

    ctx.strokeStyle = 'rgb(' + R + ',' + G + ',' + B + ')';
    
    ctx.lineTo(a.offsetX ,a.offsetY );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(a.offsetX ,a.offsetY );
}

//顏色處理
function change(){
    let R = document.getElementById("R").value
    let G = document.getElementById("G").value
    let B = document.getElementById("B").value

    document.getElementById("dratabe3").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}


//清除畫布    
function reset(){
    ctx.clearRect(0,0,600,500)    
    if(document.getElementById("image3"))
    {
        document.getElementById("image3").remove();
    }
}



let mods = ''
function casee(mods){

  switch (mods){
    case '0':
        document.getElementById("dra").style.border = "3px rgb(114, 114, 114) solid"  
        canvas.addEventListener("mousedown",startPosition);
        canvas.addEventListener("mouseup",finshedPosition);
        canvas.addEventListener("mousemove",draw);
        break;  
    case '1':
        document.getElementById("box").style.border = "3px rgb(114, 114, 114) solid"
        canvas.addEventListener('mousemove', move, false)
		canvas.addEventListener('mousedown', down, false)
		canvas.addEventListener('mouseup', upp, false)
     
        break;
    case '2':
        document.getElementById("ring").style.border = "3px rgb(114, 114, 114) solid"
        canvas.addEventListener('mousemove', movep, false)
		canvas.addEventListener('mousedown', downp, false)
		canvas.addEventListener('mouseup', uppp, false)
        break;

        
    }  

    if(mods != '0'){
        document.getElementById("dra").style.border = null
        canvas.removeEventListener("mousedown",startPosition);
        canvas.removeEventListener("mouseup",finshedPosition);
        canvas.removeEventListener("mousemove",draw);
    }

    if(mods != '1'){
        document.getElementById("box").style.border = null
        canvas.removeEventListener('mousemove', move, false)
        canvas.removeEventListener('mousedown', down, false)
        canvas.removeEventListener('mouseup', upp, false)
    }

    if(mods != '2'){
        document.getElementById("ring").style.border = null
        canvas.removeEventListener('mousemove', movep, false)
        canvas.removeEventListener('mousedown', downp, false)
        canvas.removeEventListener('mouseup', uppp, false)
    }
}



var ax = 0,
    ay = 0,
    mx = 0,
    my = 0,
    bx = 0,
    by = 0,
    width = 0,
    height = 0,
    paint = false;

function move(e) {
    mx = e.offsetX ;
    my = e.offsetY ;
    paintReact()
}

function down(e) {
    ax = e.offsetX ;
    ay = e.offsetY ;
    paint = true
}



function movep(e) {
    mx = e.offsetX ;
    my = e.offsetY ;
    paintReact()
}


function downp(e) {
    ax = e.offsetX ;
    ay = e.offsetY ;
    paint = true
}

function upp(e) {

    bx = e.offsetX ;
    by = e.offsetY ;
    paint = false

    width = mx - ax
    height = my - ay
    ctx.fillRect.bor
    
    ctx.fillRect(ax, ay, width, height)
    ctx.lineWidth = 2
    
    ctx.strokeRect(ax, ay, width, height)
    
}

function uppp(e) {

    bx = e.offsetX ;
    by = e.offsetY ;
    paint = false

    width = mx - ax
    height = my - ay
    
    ctx.fillRect.bor
    
    ctx.lineWidth = 2
    
    ctx.arc((width/2)+ax,(height/2)+ay ,width/2, 0, 2 * Math.PI); 
    ctx.stroke()

    ctx.fill()
    ctx.beginPath();
    
    
}

let j = ''
function colorpp(j){
    switch(j){
        case 'R':
            ctx.fillStyle = 'rgba(225,0,0,0.2)'
            ctx.strokeStyle ='rgb(225,0,0)'
            break
        case 'G':
            ctx.fillStyle = 'rgba(0,225,0,0.2)'
            ctx.strokeStyle ='rgb(0,225,0)'
            break
        case 'Y':
            ctx.fillStyle = 'rgba(225,225,0,0.2)'
            ctx.strokeStyle ='rgb(225,225,0)'
            break
        case 'P':
            ctx.fillStyle = 'rgba(245, 151, 151,0.2)'
            ctx.strokeStyle ='rgb(245, 151, 151)'
            break
    }
}


function paintReact() {
    
    width = mx - ax
    height = my - ay
    
}

//剪貼簿 內容
(function(){
    var imgReader = function( item ){
        var blob = item.getAsFile(),
            reader = new FileReader();

        reader.onload = function( e ){
            var img = new Image();

            img.src = e.target.result;
            img.setAttribute("id", "image3");
            document.getElementById("canvasdiv").appendChild( img );
            
        };

        reader.readAsDataURL( blob );
    };

    document.getElementById( 'testInput' ).addEventListener( 'paste', function( e ){
    var clipboardData = e.clipboardData,
        i = 0,
        items, item, types;

    if(document.getElementById("image3"))
    {
     var a = document.getElementById("image3")
     a.remove();
    }

    if( clipboardData ){
        items = clipboardData.items;

        if( !items ){
            return;
        }

        item = items[0];
        types = clipboardData.types || [];

        for( ; i < types.length; i ){
            if( types[i] === 'Files' ){
                item = items[i];
                break;
            }
        }

        if( item && item.kind === 'file' && item.type.match(/^image\//i) ){
            imgReader( item );
        }
    }
    });
})()

function screenshot(){
    
    html2canvas(document.getElementById('canvasdiv')).then(function(canvas) {
        
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'image.jpg';
        a.click();
        alert("下載成功")
    })
}

function upload(){
    
    window.open("http://localhost/webmeet/innnn.php","","width=500,height=400")
  
}