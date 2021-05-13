 var btnTranslate = document.querySelector("#btn-translate");
 var txtInput = document.querySelector("#txtinput");
 var outputDiv  = document.  querySelector("#output");

var serverUrl = "	https://api.funtranslations.com/translate/shakespeare.json"


 function getTranslationURL(input) {
   return serverUrl + "?" + "text=" +input 
 }
console.log(getTranslationURL())


function clickHandler()
  {
     // outputDiv .innerText = "ajdnonooo" + txtInput.value;
     var inputText = txtInput.value;
     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => 
      {
       var translatedText =  json.contents.translated;
        outputDiv .innerText = translatedText;
       
        
})
  };
 

btnTranslate.addEventListener("click", clickHandler);