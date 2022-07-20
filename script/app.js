
//Initializing 
let divItems = document.getElementsByTagName("div");
let copiedDivs = [];
let clonedDiv;

console.log('testing');

// Sorts Numbered Divs
function sortDivs() {
  console.log('Sorting');

  let sortContainer = document.getElementById("container");
  for (let i = 0; i < 9; i++) {
    clonedDiv = divItems[i].cloneNode(true);
    copiedDivs.push(clonedDiv);
  }

  //removing divs
  for (let j = 8; j >= 0; j--) {
    divItems[j].remove();
  }

  var sortingDone = false;
  while (!sortingDone) {
    sortingDone = true;
    for (var k = 1; k < copiedDivs.length; k += 1) {
      if (copiedDivs[k - 1].innerHTML > copiedDivs[k].innerHTML) {
        sortingDone = false;
        var tmp = copiedDivs[k - 1];
        copiedDivs[k - 1] = copiedDivs[k];
        copiedDivs[k] = tmp;
      }
    }
  }

  for (var k = 0; k < copiedDivs.length; k += 1) {
    sortContainer.append(copiedDivs[k]);
  }

  copiedDivs = [];
}

// Shuffles Numbered Divs
function shuffleDivs() {
  console.log('Shuffling');

  let shuffleContainer = document.getElementById("container");
  for (let i = 0; i < 9; i++) {
    clonedDiv = divItems[i].cloneNode(true);
    copiedDivs.push(clonedDiv);
  }

  for (let j = 8; j >= 0; j--) {
    divItems[j].remove();
  }

  while (copiedDivs.length > 0) {
    var randomIndex = Math.floor(Math.random() * copiedDivs.length);
    shuffleContainer.append(copiedDivs.splice(randomIndex, 1)[0]);
  }

};
