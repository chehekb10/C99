var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("text_area").innerHTML= "";
    recognition.start();
}
recognition.onresult = function(event) {

    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("text_area").innerHTML= content;
    console.log(content);
    speak();
}


function speak()
{
    var synth = window.speechSynthesis;

    speak_data= document.getElementById("text_area").value;
    var ut= new SpeechSynthesisUtterance(speak_data);
    synth.speak(ut);
    Webcam.attach(camera);
}

Webcam.set({

    width:200,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality:100
});
camera= document.getElementById("camera");