const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function (){
  console.log("Speech Recognition started");
};
recognition.onresult=function(event){
  console.log(event);

  const spokenwords = event.results[0][0].transcript;

  console.log("spoken words are",spokenwords);
  computerSpeech(spokenwords);
};

function computerSpeech(words){
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.pitch = 0.9 ;
  speech.volume  = 1 ;
  speech.rate= 1 ;
  
  determineWords(speech,words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if (words.includes("how are you")){
      speech.text = " I am fine ,thank you!" ;
    }
    if (words.includes("help me")){
      speech.text = " Let me call your mom" ;
    }
    if (words.includes("where is my mum")){
      speech.text = " She is here!" ;
    }
    if (words.includes("can I see my mum")){
      speech.text = " Lets call your mom" ;
      window.open("https://web.whatsapp.com/")
    }
    if (words.includes("open youtube")){
      speech.text = "Sure" ;
      window.open("https://www.youtube.com/")
    }
    if (words.includes("play rhymes")){
      speech.text = "Okay" ;
      window.open("https://www.youtube.com/results?search_query=rhymes+for+babies")
    }
    if (words.includes("relax")){
      speech.text = " ok Cool! " ;
      window.open("https://www.youtube.com/watch?v=DrmcAh2FRHQ")
    }

  }

button.addEventListener("click",()=>{
    recognition.start();

});