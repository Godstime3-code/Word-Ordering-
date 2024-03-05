document.querySelector("button").addEventListener("click",(e)=>{
  e.preventDefault()
  let text1 = document.querySelector("#js-word_one");
  let text2 = document.querySelector("#js-word_two");
  let message = document.querySelector("#message")
  let msg = "Congratulations! The words are in their correct order.";
  // Getting the value 
  let text1Value = text1.value;
  let text2Value = text2.value;
  
  // Check 
  if(text1Value.toLowerCase() > text2Value.toLowerCase()){
    text2.value= text1Value;
    text1.value= text2Value;
    
    message.innerHTML = msg
  }else if(text1Value.toLowerCase() < text2Value.toLowerCase()){
    msg+= " Although they are in their correct order to begin with!";
    
    message.innerHTML = msg
  }else{
    msg+= " Although they are the same the order doesn't matter much";
    
    message.innerHTML = msg
  }
} )