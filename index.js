let correctAnswer = "silenzio";
let button = document.getElementById("hackButton");
let closeAnswer = "silence";
let inputField = document.getElementById("inputField");
let input = "w";


console.log(inputField);
input += inputField.value;
console.log(input);


function catify(){
    
    input = inputField.value;
console.log(input.toLowerCase());

    if(input.toLowerCase() == "silenzio"){
        alert("https://drive.google.com/drive/folders/130orSU_LwkXRJbAdXXnbd0WMNGOEplX8?usp=sharing");
        
    }
    else if (input.toLowerCase() == "silence"){
        alert("https://www.youtube.com/watch?v=UEnzE-NKa9A");
    }
    else{
    alert("https://youtu.be/gJscrxxl_Bg?t=13");}
   
}
