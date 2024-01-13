const notesContainer = document.querySelector(".notes__container");
const button = document.querySelector(".btn");

let notes = document.querySelectorAll(".input__box");


// to display the notes everytime the website is loaded 
showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// whatever is writen in the html will be stored in the browser with the name "notes" whener this function is called
updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input__box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    // here we are appending the input box to the container and then the img to the inputbox appended in that order 
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } 
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input__box");
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

// this line of code will prevent to default function of the enter key 
document.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});