const init = function () {
  GenerateObsah(".Obsah");
}
const GenerateObsah = function (Obsah, element, text) {
  //document.getElementsByTagName("h1")[0].setAttribute("id", "H1");
  //let allH = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  //console.log(allH);
  //document.getElementById("H1");
  //let Obsažníček = document.querySelector(Obsah);
  //let ol = document.createElement("ol");
  //let ul = document.createElement("ul");
  //let ul1 = document.createElement("ul");
  //let title = document.createElement(element);
  //let nodes = document.createElement(text);
  //let li1 = document.createElement("li");
  //let li2 = document.createElement("li");
  //let li = document.createElement("li");
  //Obsažníček.appendChild(ol);
  //ol.appendChild(li);
  //li.innerText = document.getElementById("H1").innerText;
  //ul.innerText = document.getElementById("H2").innerText;
  //li.appendChild(ul);
  //li.appendChild(ul1);  
  //ul.appendChild(li1);
  //ul1.appendChild(li2)
  //title.appendChild(nodes);
  //
  //for (let index = 0; index < 6; index++) {
  //  
  //  
  //}
  let countOfH1 = document.querySelectorAll("h1");
  let dest = document.querySelector(Obsah);
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let li1 = document.createElement("li");
  let node;
  let nodeforH2;

  for (let index = 1; index < countOfH1.length + 1; index++) {
    node = document.createTextNode(document.getElementById("H" + index).innerText);
    let title = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      nodeforH2 = document.createTextNode(document.getElementById("H1"+ 0).innerText);
      
      
    }
    title.appendChild(node);
    ul.appendChild(li);
    li.appendChild(title);
    
    dest.appendChild(ul);

  }

  //let h1 = [];
  //let allH1 = document.querySelectorAll("h1")
  //document.getElementsByTagName("h1")[0].setAttribute("id", "H1");
  //  console.log(allH1);
  //  
  //  for (let i = 0; i < h1.length; i++) {
  //    
  //      let CelyElement = h1[i]; //cely tag
  //      console.log(CelyElement);
  //    }

}
document.addEventListener('DOMContentLoaded', init);