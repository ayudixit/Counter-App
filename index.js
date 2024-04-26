let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

//1. Create a function, save(), which logs out the count when it's called

function save() {

    let countStr = count + " - "
  
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText

    saveEl.textContent += countStr
  
// NB: Make sure to not delete the existing content of the paragraph
// 4. Log out the count to the console

    countEl.textContent = 0 // Reset the count to 0
    count = 0 // Reset the count to 0
} 

