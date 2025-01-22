let h2=document.querySelector("h2")
console.log(h2.innerText);
h2.innerText=h2.innerText + " Everyone"


 let b=document.querySelectorAll(".box")
// b[0].innerHTML="bye"
// b[1].innerHTML="bye bye"
// b[2].innerHTML="bye bye bye"

let idx=1;
for(div of b)
{
    div.innerText=`new unique ${idx}`;
    idx++
}
