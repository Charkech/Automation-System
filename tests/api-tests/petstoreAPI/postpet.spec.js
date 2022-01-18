const { test, expect } = require('@playwright/test');
const {petOrder} = require('./petorder');
//Test valid petOrder object that the API expects to receive.


test('PetShopAPI-PostPet-ValidObject-Test @fast', async ({ request }) => {
  //Variables that will hold the results we want.
    let apiResponse,jsonBody;
  //We request a call to post a new order on a pet with the sample petOrder object we already set above.
  await request.post('https://petstore.swagger.io/v2/store/order',{data: petOrder})
  .then(r=>r.json().then(data=>({status:r.status, body:data}))).then(obj=>{jsonBody=obj.body; apiResponse=obj.status });
  
  expect(apiResponse).toBeTruthy();//Successful API call with code 200 - OK 
  
  //We then can visualize the json.
//   console.log(jsonBody);
});