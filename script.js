var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="100px";

var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="name";

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click here";
button.style.margin="5px";
button.style.background="lightblue";

button.addEventListener("click",getdata);

var country=document.createElement("div");
country.style.fontSize="32px";
country.style.fontFamily="Arial";

div.append(input,button,country);
document.body.append(div);

async function getdata(){
    let res=document.getElementById("name").value;
    console.log(res);
   try {
    let res1=await fetch(`https://api.nationalize.io?name=${res}`);
    let res2=await res1.json();
     console.log(res2);
    index=res2.length-1;
    console.log(` country:${res2[index].country}`);
    active.innerHTML=`country:${res2[index].country}`;
   } catch (error) {
   console.log(error);
   }

}



