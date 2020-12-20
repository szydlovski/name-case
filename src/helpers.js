function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function toLowerCase(str) {
	return str.toLowerCase();
}

function toUpperCase(str) {
	return str.toUpperCase();
}

module.exports = {
  capitalize, toLowerCase, toUpperCase
}