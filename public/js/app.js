

// console.log('Client side Javascript file is lodes')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messag1')

// messageOne.textContent = 'Javascrity'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
     const location = search.value
     console.log(location)
     fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
        messageOne.textContent = data.location
        
    })
  })
})