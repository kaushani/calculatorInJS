function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printtHistory(num){
    return document.getElementById("history-value").innerText= num;
}
function printOutput(num){
    if(num=="")
    document.getElementById("output-value").innerText=num;
    else
    return document.getElementById("output-value").innerText= getFormattedNumber(num);
}

function getOutput(){
    var output= document.getElementById("output-value").innerText;
    return output;
}
function getFormattedNumber(num){
   if(num=="-")
   return "";
    var n= reverseFormatNumber(num);
    var value = n.toLocaleString("en");
    return value;
    
}
function reverseFormatNumber(num){
    return Number(num.toString().replace(/,/g, ''));
}
var operator= document.getElementsByClassName("operator");

for(var i=0; i<operator.length;i++){
    operator[i].addEventListener("click", function(){
        if(this.id=="clear"){
            printtHistory(" ");
            printOutput(" ");
        }
        else if(this.id=="backspace"){
            var output= reverseFormatNumber(getOutput()).toString();
            if(output){
                output=output.substring(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history= getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substring(0, history.length-1);
                }
            }
            if(output!="" || history!=""){
                output=output==""? output:reverseFormatNumber(output);
                history+=output;
                if(this.id=="="){
                    var result= eval(history);
                    printOutput(result);
                    printtHistory("");
                }
                else{
                    history=history+this.id;
                    printtHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
var number= document.getElementsByClassName("number");
for(var i=0; i<number.length;i++){
    number[i].addEventListener("click", function(){
        var output= getFormattedNumber(getOutput());
        if(output!=NaN){
            output+=this.id;
            printOutput(output);
        }
    })
}