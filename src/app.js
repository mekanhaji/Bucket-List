import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// db url
const appSettings = {
    databaseURL : "https://playgroung-kanhaji-default-rtdb.asia-southeast1.firebasedatabase.app/",
}
// Initialize App
const app = initializeApp(appSettings)
const DB = getDatabase(app)
const itemInDb = ref(DB, "BuketList")
// Get value from DOM
const inputFild = document.getElementById("input-field")
const btn = document.getElementById("add-button")
const buketList = document.getElementById("items")

// geting data from firebase
// onValue is firebase function to get our data from firebase-db
onValue(itemInDb,  (snapshot) => {
    // snapsshot.exists() methos will return true if any itam is present in our db else return false
    if(!snapshot.exists()) {
        buketList.innerHTML = "No item at present ... ¯\_(ツ)_/¯"
        return
    }
    /*obj to arry
    * Object.entries(obj) > [[key, value],...]
    * Object.values(obj) > [values,...]
    * Object.keys(obj) > [key,...]
    */ 
    let data =  Object.entries(snapshot.val())
    buketList.innerHTML = ""
    data.map((item) => addItem(item))
})

// Function for click even and Enter press envet
function click() {
    const inputValue = inputFild.value
    // push is firebase fun to push new item to db
    push(itemInDb ,inputValue)
    // clear the input fild for new entry
    inputFild.value = ''
}

// Event Listener for Enter Key
document.addEventListener('keydown', (event) => {
    var name = event.key;
    // var code = event.code;
    if(name == 'Enter') click()
}, false);

// Event Listener for Butten Click
btn.addEventListener("click", click)

// Function to add item to unorder list in DOM
function addItem(item) {
    let [id, data] = [item[0], item[1]]
    // add to Buket list
    // buketList.innerHTML += `<li>${date}</li>`
    let li =  document.createElement("li")
    li.textContent = data
    li.addEventListener("dblclick", () => {removeItem(id)})

    buketList.append(li)
}

// Function to remove item
function removeItem(id) {
    let delItem = ref(DB, `BuketList/${id}`)
    // `remove` is a fun to remove data from firebase
    remove(delItem)
}