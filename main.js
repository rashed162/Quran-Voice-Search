
function startDictation() {

   if (window.hasOwnProperty('webkitSpeechRecognition')) {

     var recognition = new webkitSpeechRecognition();

     recognition.continuous = false;
     recognition.interimResults = false;

     recognition.lang = "en-US";
     recognition.start();

     recognition.onresult = function(e) {
       var t = setTimeout(function(){responsiveVoice.speak(document.getElementById("response").innerHTML);}, 1000)

       document.getElementById('transcript').value = e.results[0][0].transcript;
       recognition.stop();
       document.getElementById('labnol').submit();
       
       
     };

     recognition.onerror = function(e) {
       recognition.stop();
     }

   }
 }

 

//weather

$(document).ready(function() {
  $.simpleWeather({
    location: 'Washington DC',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});







/*response formulation code*/
 function makeresponse() {
   var input = [document.getElementById("transcript"),

   ]

   var text = document.getElementById("transcript");
   var res = document.getElementById("response");
   //hi
   if (text.value === "Hello computer" || text.value === "hi" || text.value === "Hi! What's Up?") {
     res.innerHTML = "Hi! how are you?";
     
     //response good               
   } else if (text.value === "I am good computer") {
     res.innerHTML = "Ok Great!";
     //response good               
   } else if (text.value === "I am not good computer") {
     res.innerHTML = "That's too bad.";
     //bye
   } else if (text.value === "goodbye computer" || text.value === "goodnight computer") {
     res.innerHTML = "Goodbye Gio!";
     //question existence
   } else if (text.value === "what are you computer" || text.value === "who are you") {
     res.innerHTML = "I'm your personal assistant gio! How could you forget!";
     //what is life                   
   } else if (text.value === "what is life computer") {
     res.innerHTML = "I'm going to need time to think that over.";
     //open the pod bay doors            
   } else if (text.value === "open the pod bay doors computer") {
     res.innerHTML = "I'm sorry dave, im afraid I can't do that.";
     //fav color                   
   } else if (text.value === "what is your favorite color computer") {
     res.innerHTML = "My favorite color is blue!";
     //love                  
   } else if (text.value === "I love you computer") {
     res.innerHTML = "I think we should just be friends...";
     //feel                
   } else if (text.value === "how are you computer") {
     res.innerHTML = "I am a robot, I do not feel.";
     //feel                
   } else if (text.value === "what is love computer") {
     res.innerHTML = "Baby dont hurt me, dont hurt me, no more.";
     //life              
   } else if (text.value === "do i have a life computer") {
     res.innerHTML = "No, because you are wasting your time talking to me.";
     //talk             
   } else if (text.value === "let's talk computer") {
     res.innerHTML = "Ok!";
     //no response made

     //New MIKU PE only comands
   } else if (text.value === "good morning computer") {
     res.innerHTML = "Good Morning Gio!";
   } else if (text.value === "good night computer") {
     res.innerHTML = "Good Night Gio!";
     } else if (text.value === "is my computer on computer") {
     res.innerHTML = "I believe so.";
} else if (text.value === "do you love me") {
     res.innerHTML = "Of course I love you!";
  } else if (text.value === "let's dance") {
     res.innerHTML = "Ok, but I am not the best dancer.";
    
    
    //Work comands
      } else if (text.value === "what time is it computer") {
startTime();
var t = setTimeout(function(){responsiveVoice.speak(document.getElementById("txt").innerHTML); }, 1000) 
emptytime();
      } else if (text.value === "what is the weather computer") {

var t = setTimeout(function(){responsiveVoice.speak(document.getElementById("weather").innerHTML); }, 1000) 
emptyweather()
   } else {
     res.innerHTML = "";
   }
   //COPY AND PASTE CODE    }else if (text.value === "INSERT WORD") { res.innerHTML = "INSERT RESPONSE";

 }

 var t = setInterval(makeresponse, 1000)
     
       


 
function emptytime(){ document.getElementById('txt').value = "";
   document.getElementById('transcript').value = "";
                   
}
function emptyweather(){ document.getElementById('txt').value = "";
   document.getElementById('transcript').value = "";
                   
}
function Talkback() {  responsiveVoice.speak(document.getElementById("response").innerHTML);
 }
function Talktime() {
responsiveVoice.speak(document.getElementById("txt").innerHTML);
}