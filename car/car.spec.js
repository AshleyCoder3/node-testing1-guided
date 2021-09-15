function objectMaker() {
  return {}
}

// Test away!
it('works', () => {
  expect(true).toBeTruthy()
  expect(true).not.toBe(false)
})
test('objectMaker returns an object', () => {
  const whatItReturns = objectMaker()
  const whatWeExpect = {}
  expect(whatItReturns).toBe(whatWeExpect)
})
