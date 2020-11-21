const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
// button.innerHTML="Hello";
// button[0].innerHTML="15%";
// button[1].innerHTML="20%";
// button[2].innerHTML="25";
button.addEventListener("click", function(){
    const cost = document.querySelector("input");
    // console.log("click");
    console.log(cost.value * 0.15);
    let tip = (cost.value*0.15).toFixed(2);
    let temp = '<h1>You should tip $ '+ tip + ' on $'+cost.value +'</h1>';

    output.innerHTML=temp;

});