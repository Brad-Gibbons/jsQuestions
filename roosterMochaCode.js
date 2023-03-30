// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;

// testing

const assert = require('assert')
const Rooster = require('../index');

describe('somethin', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      // define 
      const expected = 'cock-a-doodle-doo!';
      // Call
      const rec = Rooster.announceDawn();
      // Verify
      assert.equal(expected, rec)

    })
    it('returns its argument as a string.', () => {
      const time = '6'

      const actTime = Rooster.timeAtDawn('6')

      assert.strictEqual(actTime, time)
    })
  })
  it('throws an error if passed a number less than 0', () => {
    const hour = -2
    const RangeError = 'num less than 0'
    assert.throws(
      () => {
        Rooster.timeAtDawn(hour)
      },
        RangeError
      );
  })
   it('throws an error if passed a number larger than 23', () => {
    const hour = 26
    const RangeError = 'num more than 23'
    assert.throws(
      () => {
        Rooster.timeAtDawn(hour)
      },
        RangeError
      );
  })
})