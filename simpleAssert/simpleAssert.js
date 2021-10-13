export const simpleAssert = (actual, expected, message) => {
    if (actual === expected) {
        console.log('Successful', actual, expected);
    } else {
      console.log('Failed', actual, expected);
    }
  }
module.exports = simpleAssert;