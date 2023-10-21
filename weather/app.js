let getdiv = document.getElementById('get-div')
let inp = document.getElementById('weather')
// let geth1 = document.getElementById('geth1')

let btn = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
  .then(data => data.json())
  .then(data => {
    inp.value =' '
    getdiv.innerHTML = data.main.temp
// if(inp === ' '){
//   alert('abs')
// }

  }
  )
  .catch(err => alert(err))   
    // let h1 =document.createElement('h1')  
  // let h1text =document.createTextNode('Weather')  
  // h1.appendChild (h1text)
  // geth1.appendChild (h1)

}