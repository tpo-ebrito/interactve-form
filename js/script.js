'use strict'
const name = document.querySelector('#name')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const color = document.querySelector('#color')
const activities = document.querySelector('#activities')
const total = document.querySelector('#activities-cost')
let totalCost = 0
const checkbox = document.querySelectorAll('input[type=checkbox]')

const payment = document.querySelector('#payment')
const creditCard = document.querySelector('#credit-card')
const payPal = document.querySelector('#paypal')
const bitCoin = document.querySelector('#bitcoin')
const email = document.querySelector('#email')
const ccNum = document.querySelector('#cc-num')
const zip = document.querySelector('#zip')
const cvv = document.querySelector('#cvv')
const form = document.querySelector('form')

name.focus()
otherJobRole.style.display = 'none'
color.disabled = true
payPal.style.display = 'none'
bitCoin.style.display = 'none'
document.querySelector('[value="credit-card"]').selected = true

// console.log(jobRole)
// console.log(design)
// console.log(color)
// console.log(color.children[1])

jobRole.addEventListener('change', (e) => {
  const dropDown = e.target.value
  // console.log(dropDown)
  if (dropDown === 'other') {
    otherJobRole.style.display = 'inline'
  } else {
    otherJobRole.style.display = 'none'
  }
})

design.addEventListener('change', (e) => {
  color.disabled = false

  for (let i = 1; i < color.length; i++) {
    const colorValue = e.target.value
    const colorAttribute = color[i].getAttribute('data-theme')

    if (colorValue === colorAttribute) {
      color[i].hidden = false
      color[i].selected = true
    } else {
      color[i].hidden = true
      color[i].selected = false
    }
  }
})

activities.addEventListener('change', (e) => {
  const checkbox = e.target
  const dataCost = +(checkbox.getAttribute('data-cost'))
  console.log(dataCost)
  console.log(typeof dataCost)

  const checked = checkbox.checked
  console.log(totalCost)
  if (checked) {
    totalCost += dataCost
    // console.log(totalCost)
  } else {
    totalCost -= dataCost
    // console.log(totalCost)
  }
  total.innerHTML = `Total: $${totalCost}`
})

payment.addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'credit-card':
      creditCard.style.display = ''
      payPal.style.display = 'none'
      bitCoin.style.display = 'none'
      break
    case 'bitcoin':
      creditCard.style.display = 'none'
      payPal.style.display = 'none'
      bitCoin.style.display = ''
      break
    case 'paypal':
      creditCard.style.display = 'none'
      payPal.style.display = ''
      bitCoin.style.display = 'none'
      break
  }
})

form.addEventListener('submit', (e) => {
  const userName = name.value
  const userEmail = email.value
  const userCreditCard = ccNum.value
  const userZip = zip.value
  const userCvv = cvv.value

  const parentName = name.parentNode
  const parentEmail = email.parentNode
  const parentCreditCard = ccNum.parentNode
  const parentZip = zip.parentNode
  const parentCvv = cvv.parentNode
  const parentCheckbox = document.querySelector('input[type=checkbox]').parentNode

  const regexName = /^[A-Za-z\s]+$/
  const regexEmail = /^[^@]\w+@[^@]\w+\.(com|net|org)$/
  const regexCreditCard = /\d{13,16}$/
  const regexZip = /\d{5}$/
  const regexCvv = /\d{3}$/

  const isValidName = regexName.test(userName)
  const isValidEmail = regexEmail.test(userEmail)
  const isValidCreditCard = regexCreditCard.test(userCreditCard)
  const isValidZip = regexZip.test(userZip)
  const isValidCvv = regexCvv.test(userCvv)

  console.log(isValidName)
  console.log(isValidEmail)
  console.log(isValidCreditCard)
  console.log(isValidZip)
  console.log(isValidCvv)

  console.log(checkbox.length)

  if (!isValidName) {
    e.preventDefault()
    parentName.classList.add('not-valid')
    parentName.classList.remove('valid')
    parentName.lastElementChild.style.display = ''
  } else {
    parentName.classList.add('valid')
    parentName.classList.remove('not-valid')
    parentName.lastElementChild.style.display = 'none'
  }
  if (!isValidEmail) {
    e.preventDefault()
    parentEmail.classList.add('not-valid')
    parentEmail.classList.remove('valid')
    parentEmail.lastElementChild.style.display = ''
  } else {
    parentEmail.classList.add('valid')
    parentEmail.classList.remove('not-valid')
    parentEmail.lastElementChild.style.display = 'none'
  }
  if (!isValidCreditCard) {
    e.preventDefault()
    parentCreditCard.classList.add('not-valid')
    parentCreditCard.classList.remove('valid')
    parentCreditCard.lastElementChild.style.display = ''
  } else {
    parentCreditCard.classList.add('valid')
    parentCreditCard.classList.remove('not-valid')
    parentCreditCard.lastElementChild.style.display = 'none'
  }
  if (!isValidZip) {
    e.preventDefault()
    parentZip.classList.add('not-valid')
    parentZip.classList.remove('valid')
    parentZip.lastElementChild.style.display = ''
  } else {
    parentZip.classList.add('valid')
    parentZip.classList.remove('not-valid')
    parentZip.lastElementChild.style.display = 'none'
  }
  if (!isValidCvv) {
    e.preventDefault()
    parentCvv.classList.add('not-valid')
    parentCvv.classList.remove('valid')
    parentCvv.lastElementChild.style.display = ''
  } else {
    parentCvv.classList.add('valid')
    parentCvv.classList.remove('not-valid')
    parentCvv.lastElementChild.style.display = 'none'
  }
  if (!checkbox[0].checked &&
     !checkbox[1].checked &&
     !checkbox[2].checked &&
     !checkbox[3].checked &&
     !checkbox[4].checked &&
     !checkbox[5].checked &&
     !checkbox[6].checked) {
    e.preventDefault()
    parentCheckbox.classList.add('not-valid')
    parentCheckbox.classList.remove('valid')
    parentCheckbox.lastElementChild.style.display = ''
  } else {
    parentCheckbox.classList.add('valid')
    parentCheckbox.classList.remove('not-valid')
    parentCheckbox.lastElementChild.style.display = 'none'
  }

  for (let i = 0; i < checkbox.length; i++) {
    parentCheckbox.addEventListener('focus', (e) => {
      parentCheckbox.classList.add('focus')
    })
    parentCheckbox.addEventListener('blur', (e) => {
      parentCheckbox.parentNode.classList.remove('focus')
    })
  }
})
