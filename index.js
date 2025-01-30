const currentTimeUTC = new Date().toUTCString()

console.log(currentTimeUTC)

const currentTimeParagraph = document.querySelector(`#currentTime`)

currentTimeParagraph.textContent = currentTimeUTC