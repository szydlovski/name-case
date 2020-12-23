const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const lower = word => word.toLowerCase();
const upper = word => word.toUpperCase();
const camelize = (word, index) => index === 0 ? word : capitalize(word);
const sentencify = (word, index) => index === 0 ? capitalize(word) : word;

module.exports = {
  capitalize, lower, upper, camelize, sentencify
}