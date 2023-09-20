// Function to write thank you cards
function writeCards(names, event) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}

// Function to count down from a given number
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

module.exports = {
  writeCards,
  countDown,
};

