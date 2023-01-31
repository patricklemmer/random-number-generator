// Imports
import './style.css'

// *************************
// *************************
// Elements

// Global
const html = document.querySelector('html')
const body = document.querySelector('body')

// Header
const nav = document.querySelector('.nav')
const navImg = document.querySelector('.nav--img')
const navSpan = document.querySelector('.nav--span')

// Main
const header = document.querySelector('.header')
const headerHead = document.querySelector('.header--head')
const headerContent = document.querySelector('.header--content')
const headerContentLink = document.querySelector('.header--content--link')
const main = document.querySelector('main')
const generatorWrapper = document.querySelector('.generator--wrapper')
const dice = document.querySelector('.play--button')
const numbers = document.querySelector('.numbers')
const output = document.querySelector('.output--info')
const fiveNumbers = document.querySelector('.five--numbers')
const twoNumbers = document.querySelector('.two--numbers')

// *************************
// *************************
// Styles
// *********

//Global
// *********

html.style.height = '100vh'
html.style.width = '100vw'

// Body
body.style.fontFamily = 'Inter'

// Local
// *********

// Header
nav.style.backgroundColor = 'green'
nav.style.display = 'flex'
nav.style.flexFlow = 'row nowrap'
nav.style.justifyContent = 'center'
nav.style.alignItems = 'center'
nav.style.height = '70px'
nav.style.margin = 'auto'
nav.style.marginBottom = '60px'
nav.style.padding = '20px'

// Header Image (img)
navImg.style.height = '40px'
navImg.style.marginRight = '10px'

// Header Span (span)
navSpan.style.fontSize = '14px'
navSpan.style.fontStyle = 'italic'

// Main Header (div)
header.style.display = 'flex'
header.style.flexFlow = 'column nowrap'
header.style.width = '450px'
header.style.margin = 'auto'
header.style.marginBottom = '80px'

// Main Header Head (h3)
headerHead.style.marginBottom = '10px'
headerHead.style.paddingLeft = '10px'
headerHead.style.color = '#2b283a'

// Main Header Content (p)
headerContent.style.backgroundColor = '#f8f8f8'
headerContent.style.borderRadius = '15px'
headerContent.style.fontWeight = '400'
headerContent.style.fontSize = '13px'
headerContent.style.lineHeight = '150%'
headerContent.style.padding = '30px'
headerContent.style.color = '#2b283a'

// Main Header Content Link (a)
headerContentLink.style.color = '#2b283a'

// Main (main)
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'
main.style.marginTop = '5vh'

// Main Generator Wrapper (div)
generatorWrapper.style.height = '40vh'
generatorWrapper.style.width = '750px'
generatorWrapper.style.border = '1px solid #d2eccd'
generatorWrapper.style.backgroundColor = '#d2eccd'
generatorWrapper.style.borderRadius = '15px'
generatorWrapper.style.padding = '25px'
generatorWrapper.style.display = 'grid'

// Dice (button)
dice.style.fontSize = '3rem'
dice.style.borderRadius = '5px'
dice.style.backgroundColor = 'transparent'
dice.style.border = '#ff7e5a'
dice.style.padding = '15px'
dice.style.cursor = 'pointer'
dice.style.marginBottom = '70px'
dice.addEventListener('click', generateNumbers)

// Numbers (div)
numbers.style.fontSize = '1.5rem'
numbers.style.height = '200px'
numbers.style.width = 'content-fit'
numbers.style.padding = '30px'
numbers.style.border = '1px solid #fffcef'
numbers.style.backgroundColor = '#fffcef'
numbers.style.borderRadius = '15px'
numbers.style.display = 'flex'
numbers.style.justifyContent = 'center'
numbers.style.alignItems = 'center'

// Output info (p)
output.style.marginRight = '20px'

// Five numbers (div)
fiveNumbers.style.marginRight = '50px'

// *************************
// *************************

// Logic
// *********
function generateNumbers() {
  const generateRandomNumbers = (count, min, max) => {
    let nums = new Set()
    while (nums.size < count) {
      nums.add(Math.floor(Math.random() * (max - min) + min))
    }
    return [...nums]
  }

  const fiveRandomNumbers = generateRandomNumbers(5, 1, 50)
  const twoRandomNumbers = generateRandomNumbers(2, 1, 12)

  fiveNumbers.innerHTML = fiveRandomNumbers.join(' - ')
  twoNumbers.innerHTML = twoRandomNumbers.join(' - ')
}
