//an array with different messages
const lista = [
    "Nothing is impossible. The word itself says 'I'm possible!'— Audrey Hepburn",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.— Lady Gaga",
    "No matter what people tell you, words and ideas can change the world. — Robin Williams",
    "Not having the best situation, but seeing the best in your situation is the key to happiness. — Marie Forleo",
    "Believe you can and you're halfway there.- Theodore Roosevelt",
    "Live your beliefs and you can turn the world around. — Henry David Thoreau"
]

//set up the function that prints a different message
let getRandomMes = ()=> {
    //initiate the variables that we need
    let nr = Math.floor(Math.random() * lista.length)
    let data = new Date()

    //print the message
    console.log(`Your quote for today is: \n ${lista[nr]} \n ${data}`)
}

//call the function
getRandomMes();


