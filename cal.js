var cv= [""];///current value
 let index=0;

function realValue(){
    return document.querySelector("#calD").value;
}
function c(){
    cv=[""];
    document.querySelector("#calD").value=cv;
}
function cal1(){
    if (cv[index]=="+"||cv[index]=="-" ||cv[index]=="*"||cv[index]=="/"||cv[index]=="%"){
        cv[++index]="1";
    }
    else{
        cv[index]+="1";
    }
    document.querySelector("#calD").value=realValue()+"1";
    
}
function cal2(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="2";
    }else{
        cv[index]= cv[index]+"2";
    }
    document.querySelector("#calD").value=realValue()+"2";
}
function cal3(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="3";
    }else{
        cv[index]= cv[index]+"3";
    }
    document.querySelector("#calD").value=realValue()+"3";
}
function cal4(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="4";
    }else{
        cv[index]= cv[index]+"4";
    }
    document.querySelector("#calD").value=realValue()+"4";
}
function cal5(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="5";
    }else{
        cv[index]= cv[index]+"5";
    }
    document.querySelector("#calD").value=realValue()+"5";
}
function cal6(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="6";
    }else{
        cv[index]= cv[index]+"6";
    }
    document.querySelector("#calD").value=realValue()+"6";
}
function cal7(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="7";
    }else{
        cv[index]= cv[index]+"7";
    }
    document.querySelector("#calD").value=realValue()+"7";
}
function cal8(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="8";
    }else{
        cv[index]= cv[index]+"8";
    }
    document.querySelector("#calD").value=realValue()+"8";
}
function cal9(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="9";
    }else{
        cv[index]= cv[index]+"9";
    }
    document.querySelector("#calD").value=realValue()+"9";
}
function cal0(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="0";
    }else{
        cv[index]= cv[index]+"0";
    }
    document.querySelector("#calD").value=realValue()+"0";
}
function cal00(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="00";
    }else{
        cv[index]= cv[index]+"00";
    }
    document.querySelector("#calD").value=realValue()+"00";
}
function persentage(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]="%";
    }else{
        cv[index]= cv[index]+"%";
    }
    document.querySelector("#calD").value=realValue()+"%";
}
function dot(){
    if (cv[index]=='+'||cv[index]=='-'||cv[index]=='*'||cv[index]=='/'||cv[index]=="%"){
        cv[++index]=".";
    }else{
        cv[index]= cv[index]+".";
    }
    document.querySelector("#calD").value=realValue()+".";
}
function plus(){
    cv[++index]="+";
    document.querySelector("#calD").value=realValue()+"+";
}
function division(){
    cv[++index]="-";
    document.querySelector("#calD").value=realValue()+"-";
}
function multiply(){
    cv[++index]="*";
    document.querySelector("#calD").value=realValue()+"*";
}
// function plus(){
    // cv[++index]="+";
    // document.querySelector("#calD").value=realValue()+"+";
// }
function devid(){
    cv[++index]="/";
    document.querySelector("#calD").value=realValue()+"/";
}

let a=[""];
let b= ["jay"];
a[0]+= "jayswal";

a.splice(0);
console.log(a);

 let floatv=[];
function equle(){
    for(let i=0;i<=cv.length;i++){
        // floatv[i]=parseFloat(cv[i]);
        if(cv[i]=='+'||cv[i]=='-'||cv[i]=='*'||cv[i]=='/'||cv[i]=="%"){
            floatv[i]=cv[i]; 
        }else{
            floatv[i]=parseFloat(cv[i]);
        }
    }
    solveMulty();
    solvePlus();
    solve();
}
function solvePlus(){
    for(let j=0;j<=floatv.length;j++){
        if(floatv[j]=="+"){
            floatv[j+1]=floatv[j-1]+floatv[j+1];
            floatv.splice(j-1,2);
        }

        if(floatv[j]=="-"){
            floatv[j+1]=floatv[j-1]-floatv[j+1];
            floatv.splice(j-1,2);
        }
    }
}    
function solveMulty(){
    for(let i=0;i<=floatv.length;i++){
        if(floatv[i]=="*"){
            floatv[i+1]=floatv[i-1]*floatv[i+1];
            floatv.splice(i-1,2);
            // floatv.splice(floatv[i]);
        }    
    
        if(floatv[i]=="/"){
            floatv[i+1]=floatv[i-1]/floatv[i+1];
            floatv.splice(i-1,2);
        }
    }
}
// 
        // if(floatv[j]=="%"){
            // floatv[j+1]=floatv[j-1]%floatv[j+1]
        // }
        
function solve(){
    let ans=floatv[floatv.length-2];
    document.querySelector("#calD").value=ans;
    floatv=[];
    // first commit
} 
