let loading = document.querySelector('.theNumber')
let option = document.querySelectorAll('.option')
let i = 1;
let numbers = '0123456789'
array = []
randomnumbers()
function randomnumbers() {

    let random = numbers[Math.floor(Math.random() * numbers.length)]
    // console.log(random)
    if (!array.includes(random)) {
        array.push(random)
        // if (array.length < 11) {
        //     randomnumbers()
        // }
        if(array.length ==10){

            console.log(array)
        }
        else
        randomnumbers()
    }
    else {
        randomnumbers()
    }

}

function showoption(){
for(let j=0;j<option.length;j++){
 option[j].innerHTML = array[j]
}}



let interval = setInterval(() => {
    if (i == 2) {
let randomshow = Math.floor(Math.random()*10)
         

        loading.innerHTML = randomshow
        showoption()

        clearInterval(interval)

    }
    i++
}, 1000)