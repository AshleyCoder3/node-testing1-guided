const Car = require('./car')
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

describe('car', () => {
  let prius
  beforeEach(() => { // afterEach beforeAll afterAll
    prius = new Car('Toyota', 'Prius')
  })
  test('Car is defined', () => {
    expect(Car).toBeDefined()
  })
  test('Car creates instances of cars', () => {
    expect(prius.make).toBe('Toyota')
    expect(prius.model).toBe('Prius')
    expect(prius).toHaveProperty('make')
    expect(prius).toHaveProperty('model', 'Prius')
    // expect(prius).toEqual({ make: 'Toyota', model: 'Prius' }) // fragile!
    expect(prius).toMatchObject({ make: 'Toyota', model: 'Prius' })
  })
  test('new cars have an odometer set at zero', () => {
    expect(prius.odometer).toBe(0)
  })
  test('cars have a "drive" method', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBeInstanceOf(Function)
    expect(typeof prius.drive).toBe("function")
    expect(prius).toHaveProperty("drive")
    expect(prius.drive).toBe(Car.prototype.drive)
  })
  test('driving the car increases odometer by driven distance', () => {
    // arrange! (making a new prius)
    prius.drive(50) // act!
    expect(prius.odometer).toBe(50) // assert
    prius.drive(25)
    expect(prius.odometer).toBe(75)
  })
})
