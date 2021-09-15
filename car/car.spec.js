function objectMaker() {
  return {}
}
it('compiles', () => {
  expect(true).toBeTruthy()
  expect(true).not.toBe(false)
})
test('objectMaker returns an object', () => {
  const whatItReturns = objectMaker()
  const whatWeExpect = {}
  expect(whatItReturns).toEqual(whatWeExpect)
})
