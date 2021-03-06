// This script was not produced by me.
// This was scripted by Adam Khoury in connection with the following video tutorial:
// http://www.youtube.com/watch?v=c_ohDPWmsM0
// 
// I watched the video, learned how he implemented and I tried to apply it on the coursework

var memory_array = ['break','break','case','case','continue','continue','function','function','typeof','typeof','if ','if ','else','else','return','return','void','void','with','with','try','try','catch','catch'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Well done");
					document.getElementById('memory_board').innerHTML = "<button onclick='newBoard()'>New Game</button>";
					// newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
					tile_1.style.background = "url('./images/js.png')";
					tile_1.style.backgroundPosition = 'center';
					tile_1.style.backgroundSize = 'cover';
            	    tile_1.innerHTML = "";
					tile_2.style.background = "url('./images/js.png')";
					tile_2.style.backgroundPosition = 'center';
					tile_2.style.backgroundSize = 'cover';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}