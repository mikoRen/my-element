test('test common matcher', () => {
  expect(1 + 2).toBe(3)
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(2).toBeLessThan(3)
  expect(4).toBeGreaterThan(3)
})

test('test object', () => {
  expect({name:'Lucy'}).toEqual({name:'Lucy'}) // toBe 是完全相等， toEqual 是值相等
})

