//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container=document.querySelector("#container");

let baseurl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i=1;i<=151;i++)
{   const poke= document.createElement("div");
    const label=document.createElement("span");
    label.innerText=`#${i}`;
    const image=document.createElement("img");
    image.src=`${baseurl}${i}.png`;
    poke.appendChild(image);
    poke.appendChild(label);
    container.appendChild(poke);
}
