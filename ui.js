class UI{
    constructor(){
        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
        this.outputResult=document.getElementById("outputResult");
    }

firstSelect(value){
    this.outputFirst.textContent=value;
}
secondSelect(value){
    this.outputSecond.textContent=value;
}
totalAmount(value){

outputResult.value=value;
}
}