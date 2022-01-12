//global-teardown.js
const exec = require('child_process').execSync;
async function globalSetup() {
    await exec('npx xunit-viewer -r  results.xml -o results.html ')
  };
module.exports=globalSetup;