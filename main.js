var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content=="take my selfie"){
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "taking your selfie in 5 seconds"
    var utter = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter)
    Webcam.attach(camera)
    setTimeout(function() {
       takesnapshot() 
       save()
    }, 5000);
}
camera = document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:"png", png_quality:90, dest_width:327,dest_height: 240
});

function takesnapshot(){
    Webcam.snap(function(Data_url){
        document.getElementById("result").innerHTML = "<img id = 'img_id' src = '"+Data_url+"'>"
    });
}
function save(){
    link = document.getElementById("link")
    img = document.getElementById("img_id").src
    link.href = img
    link.click()
}