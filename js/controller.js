	
	var myIndex = 0;
	carousel(); //Start

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none";
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}
	    x[myIndex-1].style.display = "block";
	    setTimeout(carousel, 2500);
	}
	function setContentRotation () {
	  var options = {
	    degree : "90",
	    aspectRatio : "original"
	  };
	    
	  function successCb() {
	        setPortraitMode(); //Turn off OsdPortraitMode
	        setTimeout(function(){setRotatedVideo();}, 2000);//To get mediaID, you need to set 2 sec
	  }
	  function failureCb(cbObject) {
	        var errorCode = cbObject.errorCode;
	        var errorText = cbObject.errorText;
	        console.log ("Error Code [" + errorCode + "]: " + errorText);
	  }
	  var video = new Video();
	  video.setContentRotation(successCb, failureCb, options);
	}
	function setPortraitMode() {
	   var options = {
	        portraitMode: Signage.OsdPortraitMode.OFF
	   };
	   var successCb = function (){
	        console.log("Portrait Mode OFF: Successfully Set");
	   };
	 
	   var failureCb = function(cbObject){
	        var errorCode = cbObject.errorCode;
	        var errorText = cbObject.errorText;
	        console.log( " Error Code [" + errorCode + "]: " + errorText);
	   };
	  
	   var signage = new Signage();        
	   signage.setPortraitMode(successCb, failureCb, options);
	}
	//Control the position and size
	function setRotatedVideo() {
	    var successCb = function (){
	        console.log("Success control postion , size of rotate video");
	    }
	    
	    var failureCb = function(cbObject){
	        var errorCode = cbObject.errorCode;
	        var errorText = cbObject.errorText;
	        console.log ("Error Code [" + errorCode + "]: " + errorText);
	    }
	    
	    var video = new Video();
	    video.setRotatedVideoTransform(successCb, failureCb, {
	        //Portrait Standard
	        x: 0 ,
	        y: 0 ,
	        width: 1080 ,
	        height: 600
	    });   
	}