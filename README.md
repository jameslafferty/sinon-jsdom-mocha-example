This is just a simple, 'hello world' style example of using sinon, jsdom and mocha to stub a server for testing.

1. The interesting part is in test/test.js.
2. The key point is that we need to make a global.XMLHttpRequest object with the correct interface available _before_ requiring sinon.
3. index.js just provides a super simple case of making an XMLHttpRequest.
