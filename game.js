// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  // remove other colour classes so the count remains accurate and for loop + if else works in updateCounts();. I should come up with some clever way of automating the removal of other classes on the DRY principle, but i suspect that would actually result in more code
  evt.target.classList.remove('blue', 'invisible')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE


function makeBlue (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('blue')
  // remove other colour classes as explained above
  evt.target.classList.remove('green', 'invisible')
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('invisible')
  // remove other colour classes as explained above
  evt.target.classList.remove('blue', 'green')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  var allDots = document.getElementsByClassName('board')[0].children;
  for (j = 0; j<allDots.length; j++) {
    if (allDots[j].classList.contains('blue')) {
      totals.blue += 1
    } else if (allDots[j].classList.contains('green')) {
      totals.green += 1
    } else {
      totals.invisible += 1
    }
  }
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
