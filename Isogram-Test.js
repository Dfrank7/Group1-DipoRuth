	function isIsogram(word){
		//var word = document.getElementById("word").value.toLowerCase().split("");
		var found=[];
		var count=0;
		for (var i = 0; i < word.length; i++) {
			if((found.indexOf(word[i]))==-1){
				found.push(word[i]);
				//alert("word is "+ word);

			}
			else
			{
				count++;
				//alert("count is "+ count);
				
				
			}
		}
		
		if(count==0){ 
			return "It is an isogram"; 
		}
			else return "Not an isogram";
		}
	}

//Another Method

    function checkForIsogram(word){
    	// word.sort();
    	for (var i = 0; i < word.length; i++) {
    		for (var j = 1; j < word.length-1; i++) {
    	}
    	if (word[i]==word[j]) {
    			return "Not an isogram";
    		}else{
    			return"It is an isogram";
    		}
    	}
    }

	