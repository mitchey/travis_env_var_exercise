
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const username = process.env.DOCKER_USERNAME;
  while(true) {
    console.log("Microservices rock!");   
    console.log(`My favorite username is ${username}`);
    await sleep(5000);
  }
}

main();
