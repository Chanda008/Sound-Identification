function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RP2mjGcn6/model.json', modelReady);
}

function modelReady(){
    classifier.classify(getResults);
}

function getResults(error, results){
    console.log("Got Results")
}