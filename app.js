var birth = document.querySelector("#birth")
var luck = document.querySelector("#luck")
var btn = document.querySelector("#btn")
var outpt = document.querySelector("#output")
var clr = document.querySelector("#clr")

btn.addEventListener("click",function clickEventHandler(){

    console.log(birth.value)
    console.log(luck.value)
    
    date = birth.value;
    console.log(date)
    date = date.replaceAll ( "-", "" );
    console.log(date);
    var bt = [];
    sum = 0;
    for ( i=0; i < date.length; i++ ) {
        bt[i] = date % luck;
        sum = bt[i] + sum;
    }
    if ( sum % luck == 0 ) {
        outpt.innerText = " Yup.You're Lucky😎 ";
    }
    else {
        outpt.innerText = " Better luck Next Life.😅 ";
    }
});

clr.addEventListener("click",function clickEventHandler(){
    birth.value = "";
    luck.value = "";
    outpt.innerText = "";
});

