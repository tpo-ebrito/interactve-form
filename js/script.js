'use strict'
const name = document.querySelector('#name')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const color = document.querySelector('#color')
const activities = document.querySelector('#activities')
const total = document.querySelector('#activities-cost')
let totalCost = 0
const payment = document.querySelector('#payment')
const creditCard = document.querySelector('#credit-card')
const payPal = document.querySelector('#paypal')
const bitCoin = document.querySelector('#bit-coin')


name.focus()
otherJobRole.style.display = 'none'
color.disabled = true
payment.options[payment.selectedIndex].value = 'credit-card'
document.querySelector('#paypal').style.display = 'none'
document.querySelector('#bitcoin').style.display = 'none'

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
