//Manipulate arrays numbers
const manipulateArrays = {
  evenArray: [],
  oddArray: [],

  //Generates a random number, used to create the loops that will populate the arrays
  generateRandomNum() {
    return Math.floor(Math.random() * 100)
  },

  //If called, populates the oddArray with only odd numbers from 0 - (0-100)
  generateOddArray() {
    for (let i = this.generateRandomNum(); i >= 0; i--) {
      if (i % 2 === 0) {
        continue;
      }

      this.oddArray.push(i)
    }
  },

  //If called, populates the evenArray with only even numbers from 0 - (0-100)
  generateEvenArray() {
    for (let i = this.generateRandomNum(); i >= 0; i--) {
      if (i % 2 > 0) {
        continue;
      }

      this.evenArray.push(i)
    }
  }
}

//Manipulates DOM, populating the ul with odd or even array
const manipulateDOM = {
  listContainer: document.getElementById('number-list'),

  //Maps the oddArray to produce a <li> element for each index
  generateNewOddArrayAsLi() {
    let newOddArray = manipulateArrays.oddArray.map((num) => {
      return `<li>${num}</li>`
    })

    let innerHTML = newOddArray.join('<li></li>')

    return innerHTML
  },

  //Maps the evenArray to produce a <li> element for each index
  generateNewEvenArrayAsLi() {
    let newEvenArray = manipulateArrays.evenArray.map((num) => {
      return `<li>${num}</li>`
    })

    let innerHTML = newEvenArray.join('<li></li>')

    return innerHTML
  },

  //Builds the inner content of the <ul> list, using the return of generateNewOddArrayAsLi
  addNewOddArray() {
    this.resetList()
    this.listContainer.innerHTML = this.generateNewOddArrayAsLi()
  },

  //Builds the inner content of the <ul> list, using the return of generateNewEvenArrayAsLi
  addNewEvenArray() {
    this.resetList()
    this.listContainer.innerHTML = this.generateNewEvenArrayAsLi()
  },

  //Cleans the inner content of the <ul> list
  resetList() {
    this.listContainer.innerHTML = ""
  }
}

//Controls app initialization and reload
const App = {
  //What to do when the application start
  init() {
    manipulateArrays.generateEvenArray()
    manipulateArrays.generateOddArray()
  },

  //What to do when the "reset" button is clicked, ordering the application to generate a new random number and repopulate the base arrays
  reload() {
    manipulateDOM.resetList()
    manipulateArrays.evenArray = []
    manipulateArrays.oddArray = []
    manipulateArrays.generateRandomNum()
    manipulateArrays.generateEvenArray()
    manipulateArrays.generateOddArray()
  }
}

//Let the games begin
App.init()