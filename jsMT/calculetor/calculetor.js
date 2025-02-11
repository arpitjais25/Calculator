function maincal(){
    
    var value= document.getElementById("calD").value;
    return value;
}
var cd;
var index=0;
function c(){
//    cd=" ";
   document.getElementById("calD").value="";
}
function cal1(){
    // if(index==0){index++}
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index++]="1";
    }else{
    cd[index]="1";}
    document.getElementById("calD").value=maincal()+"1";
}
function cal2(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index++]="2";
    }else{
    cd[index]="2";}
    document.getElementById("calD").value=maincal()+"2";
}
function cal3(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index++]="3";
    }else{
    cd[index]="3";}
    document.getElementById("calD").value=maincal()+"3";
}
function cal4(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index]="4";
    }else{
    cd[index]=cd[index]+"4";}
    document.getElementById("calD").value=maincal()+"4";
}
function cal5(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index]="5";
    }else{
    cd[index]=cd[index]+"5";}
    document.getElementById("calD").value=maincal()+"5";
}
function cal6(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index]="6";
    }else{
    cd[index]=cd[index]+"6";}
    document.getElementById("calD").value=maincal()+"6";
}
function cal7(){
    if(cd[(cd.length)-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index++]="7";
    }else{
    cd[index]=cd[index]+"7";}
    document.getElementById("calD").value=maincal()+"7";
}
function cal8(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index]="8";
    }else{
    cd[index]=cd[index]+"8";}
    document.getElementById("calD").value=maincal()+"8";
}
function cal9(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index]="9";
    }else{
    cd[index]=cd[index]+"9";}
    document.getElementById("calD").value=maincal()+"9";
}
function cal0(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
        cd[index++]="0";
    }else{
    cd[index]=cd[index]+"0";}
    document.getElementById("calD").value=maincal()+"0";
}
function cal00(){
    if(cd[cd.length-1]=="*"||cd[cd.length-1]=="-"||cd[cd.length-1]=="+"||cd[cd.length-1]=="/"||cd[cd.length-1]=="%"){
         cd[index]="00";
    }else{

    cd[index]=cd[index]+"00";}
    document.getElementById("calD").value=maincal()+"00";
}
function dot(){
    cd[index++]=".";
    document.getElementById("calD").value=maincal()+".";
}
function devid(){
    cd[index++]="/";
    document.getElementById("calD").value=maincal()+"/";
}
function persentage(){
    cd[index++]="%";
    document.getElementById("calD").value=maincal()+"%";
}
function equle(){
    // cd[index++]="=";
    // document.getElementById("calD").value=maincal()+"=";
}
function multiply(){
    cd[index++]="*";
    document.getElementById("calD").value=maincal()+"*";
}
function back(){
    // cd= [maincal()];
    // cd+="*";
    // document.getElementById("calD").value="";
}
function plus(){
    cd[index++]="+";
    document.getElementById("calD").value=maincal()+"+";
}
function division(){
    cd[index++]="-";
    document.getElementById("calD").value=maincal()+"-";
} 
for(let i=0;i<=cd.lenght;i++){
    console.log(i);
}