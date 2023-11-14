const nam = prompt('What\'s your name ?')
const age = prompt('How old are you ?')
const color = prompt('Enter any color:')
alert(`You chouse ${color}`)

let user = `<h1> Hello ${nam} <h1>
    <ul>
        <li>You are ${age} age old</li>
        <li>Your color for today is deep${color}</li>
    </ul>
`
document.body.innerHTML = user