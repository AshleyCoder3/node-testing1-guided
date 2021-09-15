const Car = require('./car');
function objectMaker() {
  return {};
}


// Test away!
it('works', () => {
  expect(true).toBeTruthy();
  expect(true).not.toBe(false);
});
test('objectMaker returns an object', () => {
  const whatItReturns = objectMaker();
  const whatWeExpect = {};
  expect(whatItReturns).toEqual(whatWeExpect);
  //toBe will not work here 
  expect(objectMaker()).toMatchObject({});
  expect({ name: 'foo', age: 25 }).toMatchObject({ age: 25 });
});
test('with truly the same abject we cab use .toBe',
  () => {
    const o = {};
    const oo = o;
    expect(o).toBe(oo);
  });
//TTD test driven development
describe('car', () => {
  let prius;
  beforeEach(() => { //afterEach beforeAll afterAll
    prius = new Car('Toyota', 'Prius');
  });

  test('car is defined', () => {
    expect(Car).toBeDefined();
  });
  test('Car creates instances of cars', () => {
    expect(prius.make).toBe('Toyota');
    expect(prius.model).toBe('Prius');
    expect(prius).toHaveProperty('make');
    expect(prius).toHaveProperty('model', 'Prius');
    //  expect(prius).toEqual({ 
    //   // as it gains stuff it no work. fragile
    //   make: 'Toyota', model: 'Prius'
    // });
    expect(prius).toMatchObject({
      make: 'Toyota', model: 'Prius'
    });
  });
  test('new cars have a odometer set at zero',
    () => {
      expect(prius.odometer).toBe(0);
    });
  test('car has a "drive" method', () => {
    // const prius = new Car('Toyota', 'Prius');
    //beforeEach make this not necessary
    expect(prius.drive).toBeInstanceOf(Function);
    expect(prius.drive).toBe(Car.prototype.drive);
    //method of object is inherited by prototype
    // inherited drive property
  });
  test('driving the car increases odometer by driven distance',
    () => {
      //1-arrange! (making a new prius)
      prius.drive(50); // 2- act
      expect(prius.odometer).toBe(50);//3- assert
      prius.drive(25);
      expect(prius.odometer).toBe(75);
    });
  test('driving the car returns the driven distance',
    () => {
      expect(prius.drive(50)).toBe(50);

      const drivenDistance = prius.drive(7);
      expect(drivenDistance).toBe(7);
    });
  test('driveAsync returns the driven distance asynchronously',
    async () => { // if returns a promise
      const drivenDistance = await prius.driveAsync(50);
      expect(drivenDistance).toBe(50);
    }, 500); //if promise doesn't settle after .5 sec fail
});