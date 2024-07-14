// Select all elements with the class 'question'
const displayQuestions = document.querySelectorAll('.question');

let currentOpenAnswer = null

// Loop through each question element
displayQuestions.forEach(quest => {
    // Get the parent node of the current question element
    const wrapper = quest.parentNode
    // Set the position of the wrapper to relative to position the icons correctly
    wrapper.style.position = 'relative'
    
    // Create the minus icon element
    const minusImg = document.createElement('img') // Set the source of the minus icon
    minusImg.setAttribute('src', 'images/icon-minus.svg') // Set the alt text for accessibility
    minusImg.setAttribute('alt', 'Minus Icon') // Add the minus-img class for styling
    /* adding a class */
    minusImg.classList.add('minus-img')
  
    const plusImg = document.createElement('img')
    plusImg.setAttribute('src', 'images/icon-plus.svg')
    plusImg.setAttribute('alt', 'Plus Icon')
    plusImg.classList.add('plus-img')
  
    // Append both icons to the wrapper element
    wrapper.appendChild(plusImg)
    wrapper.appendChild(minusImg)

    // Get the corresponding answer element
    const answer = wrapper.querySelector('.answer')
  
    // Add click event listener to the plus icon
    plusImg.addEventListener('click', () => {
        // Close current open answer
        if (currentOpenAnswer && currentOpenAnswer !== answer) {
            currentOpenAnswer.style.display = 'none'  // Hide the current open answer
            const currentWrapper = currentOpenAnswer.parentNode
            const currentMinusImg = currentWrapper.querySelector('.minus-img')
            const currentPlusImg = currentWrapper.querySelector('.plus-img')
            currentMinusImg.style.display = 'none'
            currentPlusImg.style.display = 'inline'
        }

        // Toggle current answer
        plusImg.style.display = 'none'
        minusImg.style.display = 'inline'
        answer.style.display = 'block'
        answer.style.marginBottom = '-6px'

        // Set the current open answer to the newly opened one
        currentOpenAnswer = answer
    })
    // Add click event listener to the minus icon
    minusImg.addEventListener('click', () => {
        minusImg.style.display = 'none'
        plusImg.style.display = 'inline'
        answer.style.display = 'none'

        // Reset the current open answer
        currentOpenAnswer = null
    })
})