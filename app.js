//create btn var
let btn = document.querySelector('#btn');
//create div var for appending quotes
const outerDiv = document.querySelector('#outerDiv')
const newdiv = document.querySelector('#div2')
const newdiv2 = document.querySelector('#div5')
//create event listener
btn.addEventListener('click', getData)
async function getData() {
const results = await fetch('https://api.kanye.rest/')
const data = await results.json()
    const quote = data.quote
    //create dom element with the quote given
    const div = document.createElement('div')
    div.textContent = quote
    outerDiv.prepend(div)
}
btn1.addEventListener('click', function(){
    const div3 = document.createElement('div3')
    div3.textContent = "Kanye's Advice: All you have to be is yourself" 
    newdiv.prepend(div3)

}
)
btn2.addEventListener('click', function(){
    const div4 = document.createElement('div4')
    div4.textContent = "Kanye's Advice: Today is the best day ever and tomorrow's going to be even better" 
    newdiv2.prepend(div4)

}
)




//btn.addEventListener("click", function(){
//,
//);});



//website.send();
//quoteCounter++;


//function renderHTML(data){
//var htmlString = '';
//for (i=0; i < data.length; i++) {
//tmlString += "<p>" + data[i] + "/<p>"
//}
//ye.insertAdjacentHTML('beforeend', htmlString)
//}})