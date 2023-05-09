const hre = require("hardhat");

async function main() {

    // get contracts and deploy
    const vote = await hre.ethers.getContractFactory("CreateMovieRate");
    const voteContract = await vote.deploy();  
  
    await voteContract.deployed();
  
    console.log("MovieRate deployed to:", voteContract.address);
}  

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  