const { test, expect } = require('@playwright/test');

var petOrder={
    "id": 0,
    "petId": 0,
    "quantity": 0,
    "shipDate": "2022-01-12T08:36:19.891Z",
    "status": "placed",
    "complete": true
  };
test('post pet request', async ({ request }) => {
  //Variables that will hold the results we want.
    let apiResponse,jsonBody;
  //We request a call to post a new order on a pet with the sample petOrder object we already set above.
  await request.post('https://petstore.swagger.io/v2/store/order',{data: petOrder})
  .then(r=>r.json().then(data=>({status:r.status, body:data}))).then(obj=>{jsonBody=obj.body; apiResponse=obj.status });
  
  expect(apiResponse).toBeTruthy();//Successful API call with code 200 - OK 
  
  //We then can visualize the json.
//   console.log(jsonBody);
});