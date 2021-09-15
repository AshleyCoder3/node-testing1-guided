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
  expect(whatItReturns).toEqual(whatWeExpect) // toBe will not work here!
  expect({ name: 'foo', age: 25 }).toMatchObject({ age: 25 })
})
test('with truly the same objects we can use .toBe', () => {
  const o = {}
  const oo = o
  expect(o).toBe(oo)
})
