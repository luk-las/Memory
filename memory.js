var countries = ["anglia.png", "austria.png", "bialorus.png", "dania.png", "finlandia.png", "francja.png", "grecja.png", "hiszpania.png", "irlandia.png", "islandia.png", "kanada.png", "niemcy.png", "norwegia.png", "polska.png", "portugalia.png", "rumunia.png", "szwecja.png", "turcja.png", "ukraina.png", "usa.png", "wlochy.png"];
var countries2 = new Array(countries.length);
var flags = new Array();
var counter = 0;
var pairs;
var pairsLeft;
var lock = false;
var oneVisible = false;
var visible_nr;

function showCards()
{
	pairs = parseInt($('#numberOP').val());
	if (pairs>21) pairs=21;
	pairsLeft = pairs;
	
	var question = "";
	for(let i=0; i<pairs*2; i++){
		question = question + '<div class="card" id="c' + i + '"></div>';
	}
	$('.cards').html(question);
	$('.score').html('Liczba ruchów: ' + counter);
	
	for(let i=0; i<pairs*2; i++){
		$('#c'+i).click(function(){flipCard(i);});
	}


	for(let i=0; i<countries2.length; i++){
		countries2[i] = i;
	}

	var cards2 = new Array(pairs*2);
	for(let i=0; i<pairs; i++){
		var number = Math.floor(Math.random()*countries2.length);
		cards2[i] = countries2[number];
		cards2[i+pairs] = countries2[number];
		countries2.splice(number, 1);
	}

	for( let i=0; i<pairs*2; i++){
		var number = Math.floor(Math.random()*cards2.length)
		flags[i] = countries[cards2[number]];
		cards2.splice(number, 1);
	}
	
}


function flipCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	if(opacityValue != 0 && lock == false){
		lock = true;
		var image = "url(img/" + flags[nr] + ")";
		
		$('#c'+nr).css('background-image', image);
		$('#c'+nr).css('cursor', 'default');
		$('#c'+nr).css('filter', 'brightness(100%)');
		$('#c'+nr).css('pointer-events', 'none');

		if(oneVisible == false){
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else{
			if(flags[visible_nr] == flags[nr]){
				setTimeout(function() { pairOfFlags(nr, visible_nr) }, 750);
			}
			else{
				setTimeout(function() { restoreCards(nr, visible_nr) }, 1000);
			}
			
			counter++;
			$('.score').html('Liczba ruchów: ' + counter);
			oneVisible = false;
		}
	}
	
}

function pairOfFlags(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0.1');
	$('#c'+nr1).css('pointer-events', 'none');
	$('#c'+nr2).css('opacity', '0.1');
	$('#c'+nr2).css('pointer-events', 'none')
	
	pairsLeft--;
	
	if(pairsLeft == 0){
		$('.board').html('<h2>Trafiłeś w '+counter+' próbach!<br/>Skuteczność '+Math.round((pairs/counter)*100)+' %</h2>');
	}
	
	lock = false;
}

function restoreCards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/questionMark.png)');
	$('#c'+nr1).css('cursor', 'pointer');
	$('#c'+nr1).css('filter', 'brightness(70%)');
	$('#c'+nr1).css('pointer-events', 'auto');
	$('#c'+nr2).css('background-image', 'url(img/questionMark.png)');
	$('#c'+nr2).css('cursor', 'pointer');
	$('#c'+nr2).css('filter', 'brightness(70%)');
	$('#c'+nr2).css('pointer-events', 'auto');
	lock = false;
}