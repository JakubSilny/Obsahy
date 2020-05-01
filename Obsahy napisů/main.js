const init = function () {
  GenerateObsah();
}

const GenerateObsah = function () {
  let allH = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
  let allH1 = document.querySelectorAll('h1');
  let allH2 = document.querySelectorAll('h2');
  let allH3 = document.querySelectorAll('h3');
  console.log(allH1);
  for (let i = 0; i < allH.length; i++) {
    let CelyElement = allH[i]; //cely tag
    //console.log(CelyElement);
  }
  let i = 0;
  allH1.forEach(element => {
    TagElement = element.tagName;
    console.log(TagElement); //cislo nadpisu
    
    console.log(i);
    element.setAttribute("id", i); 
      let li = document.createElement("li");//vytvoření li
      let li1 = document.createElement("li");//vytvoření li
      
      let ul = document.createElement("ul");//vytvoření ul
      let ol = document.createElement("ol");//vytvoření ol
      let ul1 = document.createElement("ul");//vytvoření ul
      let ahref = document.createElement("a");//vytvoření a
        let currentDiv = document.getElementById("Obsah");///a
        currentDiv.appendChild(ol);
        
        ol.appendChild(li1);
        li1.innerHTML = allH1[i].innerHTML;
        li1.appendChild(ul);
        ul.innerHTML = allH2[i].innerHTML;
        ul.appendChild(ul1)
        ul1.innerHTML = allH3[i].innerHTML;
        i=i+1;


  });
}
document.addEventListener('DOMContentLoaded', init);