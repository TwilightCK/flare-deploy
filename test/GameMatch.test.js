const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameMatch", function () {
  let gameMatch;
  let owner, player1, player2;
  const FTSO_REGISTRY = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

  beforeEach(async function () {
    [owner, player1, player2] = await ethers.getSigners();
    
    const GameMatch = await ethers.getContractFactory("GameMatch");
    gameMatch = await GameMatch.deploy(FTSO_REGISTRY);
    await gameMatch.waitForDeployment();
  });

  it("Should deploy successfully", async function () {
    expect(await gameMatch.getAddress()).to.be.properAddress;
  });

  it("Should allow players to join queue", async function () {
    await gameMatch.connect(player1).joinQueue({ 
      value: ethers.parseEther("0.01") 
    });
    
    const queueLength = await gameMatch.getQueueLength();
    expect(queueLength).to.equal(1);
  });
});
