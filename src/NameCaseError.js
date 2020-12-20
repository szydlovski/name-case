class NameCaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NameCaseError';
  }
}

module.exports = NameCaseError;