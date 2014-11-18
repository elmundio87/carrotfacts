    carrotName = function(name){
    	var firstname = name.split(" ")[0]
    	var lastname = name.split(" ")[1]

    	if(firstname == undefined){
    		return "Type in your name!"
    	}

    	if(lastname == undefined){
    		return "Calculating..."
    	}
    		

    	return firstname + " 'The Carrot' " + lastname
    }

    refreshCarrotFact = function(){
    	var randomnumber= Math.floor(Math.random()*carrotFacts().length)
    	$("#carrotfacts").fadeOut()
    	$("#carrotfacts").text(carrotFacts()[randomnumber])
    	$("#carrotfacts").fadeIn()
    }

    $(document).ready(function () {

    	$("#nameInput").keyup(function(event) {
    		$("#nameOutput").text(carrotName($("#nameInput").val()))
    	});

    	refreshCarrotFact()
    	window.setInterval(function(){refreshCarrotFact()}, 5000);


    });