window.addEventListener("load", function () { 
var fromNewForm = decodeURIComponent(window.location.href).indexOf('') !== -1;   //put link to new form
var fromEditForm = decodeURIComponent(window.location.href).indexOf('') !== -1; //put link to edit form here
  
    if (fromNewForm || fromEditForm) {  //check forms exist
      
      //hide all necessary fields at page load   
      var elementToHide = document.querySelector('span[id*=<ID GOES HERE>]');     //take the DOM id of the element you want to hide
      elementOne.parentElement.parentElement.style.display = "none"
      
      var elementToHideTwo = document.querySelector('span[id*=<ID GOES HERE>]');      //take the DOM id of the element you want to hide
      elementToHideTwo.parentElement.parentElement.style.display = "none"
      
      var elementToHideThree = document.querySelector('span[id*=<ID GOES HERE>]');        //take the DOM id of the element you want to hide
      elementToHideThree.parentElement.parentElement.style.display = "none"
      
      var allRadioButtons = document.querySelectorAll('input[id*=Bijzondere_x0020_gebruikskenmerk]');  //get an array of option in radio buttons 
      for (radio in allRadioButtons) { 
        allRadioButtons[radio].onclick = function () {   
          if (this.value === 'radio button one text' || this.value === 'radio button two text') {        //edit this.value
            elementOne.parentElement.parentElement.style.display = "table-row"; //display the relative element       
          } else {    
            elementOne.parentElement.parentElement.style.display = "none";      
                 }  
          if (this.value === 'radio button three text') {   //edit this.value
            elementToHideTwo.parentElement.parentElement.style.display = "table-row";    
                 }   
          else {  
            elementToHideTwo.parentElement.parentElement.style.display = "none"; 
          }  
          if (this.value === 'radio button four text'){   //edit this.value
            elementToHideThree.parentElement.parentElement.style.display = "table-row"; 
          }
          else {   
            elementToHideThree.parentElement.parentElement.style.display = "none";  
          }          
        }     
      }    
    }})
