console.log("hello")
console.log("hello")
console.log("working")
const jokeEl = document.querySelector('#joke')
const btn = document.querySelector('.btn')

async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = 
     await fetch('https://icanhazdadjoke.com',config)
     const data = await res.json()
     console.log(data.joke)
     jokeEl.innerHTML = data.joke

}
btn.addEventListener('click',generateJoke)
