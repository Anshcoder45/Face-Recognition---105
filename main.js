Webcam.set({
    width: 350,
    height : 300,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ML5 Library version is:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MRAxEhtt1/model.json", modelloaded);

function modelloaded(){
    console.log("Model is loaded successfully");
}
function check_image(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
   if(error){
    console.error(error);
   }
   else{
    console.log(results);
    document.getElementById("name_of_object").innerHTML = results[0].label;
    document.getElementById("accuracy_of_the_machine").innerHTML = results[0].confidence.toFixed(2);
   }
}