import * as HttpStatusCode from '../src/parts/HttpStatusCode/HttpStatusCode.js'

test('notFound', () => {
  expect(HttpStatusCode.NotFound).toBe(404)
})
