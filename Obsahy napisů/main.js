const init = function () {
  GenerateObsah();
}

const GenerateObsah = function () {
  let obsah = document.getElementById("obsah");
    




    var elems = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    printArray(elems);

    let ul = document.createElement("ul");
    elems.forEach(element => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = "#" + element.id;
        link.innerHTML = element.innerHTML;
        li.appendChild((link))
        ul.appendChild(li)
    });
    obsah.appendChild(ul);
  }


function printArray(arrayOfElements){
  for (index = 0; index < arrayOfElements.length; ++index) {
      console.log(arrayOfElements[index]);
  }
}


document.addEventListener('DOMContentLoaded', init);