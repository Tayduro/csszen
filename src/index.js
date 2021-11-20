
document.querySelector(".selector-find").addEventListener('click', selectorFind)
document.querySelector(".selector-next").addEventListener('click', selectorNext)
document.querySelector(".selector-prev").addEventListener('click', selectorPrev)
document.querySelector(".selector").addEventListener('input', check)

document.querySelector(".nav-top").addEventListener('click', parent)
document.querySelector(".nav-bottom").addEventListener('click', firstChild)
document.querySelector(".nav-left").addEventListener('click', previousNeighbor)
document.querySelector(".nav-right").addEventListener('click', nextNeighbor)


function check() {
  let value = '.' + document.querySelector(".selector").value;
  if (document.querySelector(value).nextElementSibling){
      document.querySelector(".selector-next").disabled = false;
  }
  if (document.querySelector(value).previousElementSibling){
        document.querySelector(".selector-prev").disabled = false;
  }
  if (document.querySelector(value).parentElement){
      document.querySelector(".nav-top").disabled = false;
  }
  if(document.querySelector(value).firstElementChild){
      document.querySelector(".nav-bottom").disabled = false;
  }
  if(document.querySelector(value).previousElementSibling){
      document.querySelector(".nav-left").disabled = false;
  }
  if(document.querySelector(value).nextElementSibling){
      document.querySelector(".nav-right").disabled = false;
  }
}

function selectorFind(){
    let value = '.' + document.querySelector(".selector").value;
    console.log(document.querySelector(".selector").value)
    console.log(document.querySelector(value))
  let object =  document.querySelector(value)
    object.classList.add('excretion')
}

function selectorNext(){
    let value = '.' + document.querySelector(".selector").value;
    console.log(document.querySelector(value).nextElementSibling, "next")
    let object =  document.querySelector(value).nextElementSibling
    object.classList.add('excretion')
}

function selectorPrev(){
    let value = '.' + document.querySelector(".selector").value;
    console.log(document.querySelector(value).previousElementSibling, "next")
    let object =  document.querySelector(value).previousElementSibling
    object.classList.add('excretion')
}

function parent() {
    buttonLock ()
    let value = '.' + document.querySelector(".selector").value;
    let object =  document.querySelector(value).parentElement
    object.classList.add('excretion')
}
function firstChild() {
    buttonLock ()
    let value = '.' + document.querySelector(".selector").value;
    let object =  document.querySelector(value).firstElementChild
    object.classList.add('excretion')
}

function previousNeighbor() {
    buttonLock ()
    let value = '.' + document.querySelector(".selector").value;
    let object =  document.querySelector(value).previousElementSibling
    object.classList.add('excretion')
}

function nextNeighbor () {
    buttonLock ()
    let value = '.' + document.querySelector(".selector").value;
    let object =  document.querySelector(value).nextElementSibling
    object.classList.add('excretion')
}

function buttonLock () {
    document.querySelector(".selector-next").disabled = true;
    document.querySelector(".selector-prev").disabled = true;
}
