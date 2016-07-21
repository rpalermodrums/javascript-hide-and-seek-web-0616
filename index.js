function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  list = document.querySelectorAll("ul.ranked-list li")
  for (var i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild(){
  subNodes = document.querySelectorAll("#grand-node div")
  return subNodes[subNodes.length -1]
}
