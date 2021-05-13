 var btnTranslate = document.querySelector("#btn-translate");
 var txtArea = document.querySelector("#txtinput");
 var OutPutdiv = document.querySelector("#outputbox");
 
function clickHandler()
  {
      OutPutdiv.innerText = "ajdnonooo" + txtArea.value;
        
};
 

btnTranslate.addEventListener("click", clickHandler)