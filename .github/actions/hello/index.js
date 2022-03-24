const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw(new Error("Fail"))
  const name = code.getInput("who-to-grret");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
//
