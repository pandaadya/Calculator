function show(val){
    document.getElementById("input").value+=val;
    return val;
}
function solve(){
    let x=document.getElementById("input").value;
    let y=eval(x);
    document.getElementById("input").value=y; 
    return y;
}
function clearScreen(){
    document.getElementById("input").value="";
}
function backspace(){
    let b=document.getElementById("input").value;
    let v=b.slice(0,b.length-1);
    document.getElementById("input").value=v;
    return v;
}
