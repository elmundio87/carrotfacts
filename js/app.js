    carrotName = function(name){
    	var firstname = name.split(" ")[0]
    	var lastname = name.split(" ")[1]

    	if(firstname == undefined || firstname == ""){
    		return "Type in your name!"
    	}

    	if(lastname == undefined || lastname == ""){
    		return "And your surname!"
    	}
    	
    	return firstname + " 'The Carrot' " + lastname
    }

    refreshCarrotFact = function(){
    	var randomnumber= Math.floor(Math.random()*carrotFacts().length)

    	$('#carrotfacts').fadeOut('fast', function() {
    		$(this).text(carrotFacts()[randomnumber]).fadeIn('fast');
    	});

    }

    $(document).ready(function () {

    	$("#nameInput").keyup(function(event) {
    		$("#nameOutput").text(carrotName($("#nameInput").val()))
    	});

    	$("#clearButton").click(function(){
    		$("#nameInput").val("")
    		$("#nameOutput").text("Type in your name!")
            $(document.body).snowfall('clear');
    	})

    	refreshCarrotFact()
    	window.setInterval(function(){refreshCarrotFact()}, 5000);

    });

    $( ".dancingCarrot" ).click(function() {
        $(document.body).snowfall({flakeCount : 100, image :"img/dancingcarrot_snow.gif", minSize: 75, maxSize: 125});
    });