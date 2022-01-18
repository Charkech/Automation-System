const { test, expect } = require('@playwright/test');

test('JsonPlaceHolderAPI-GET-Request-Test @fast', async ({ request }) => {
  //Variables to store the information we need for the tests.
  let responseStatus,json;

  //Sending the request to the API.
  await request.fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(r=>r.json().then(data=>{json=data; responseStatus=r.status}));

  //We check whether the request was succesfully made with status of OK - 200.
  await expect(responseStatus).toBeTruthy();
  
  //We then log our result to visualize the json.
  // console.log(json);
});
