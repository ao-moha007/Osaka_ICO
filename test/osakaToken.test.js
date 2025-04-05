const { expect } = require("chai");

describe("OsakaToken", function () {
  let OsakaToken, osakaToken;
  let owner, addr1, addr2;

  const initialSupply = ethers.utils.parseEther("1000"); // 1000 OSK

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    OsakaToken = await ethers.getContractFactory("OsakaToken");
    osakaToken = await OsakaToken.deploy(initialSupply);
    await osakaToken.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await osakaToken.ownerOfContract()).to.equal(owner.address);
    });

    it("Should assign the total supply to the owner", async function () {
      const ownerBalance = await osakaToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(initialSupply);
    });

    it("Should have correct name and symbol", async function () {
      expect(await osakaToken.name()).to.equal("OsakaToken");
      expect(await osakaToken.symbol()).to.equal("OSK");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.utils.parseEther("100");

      await osakaToken.transfer(addr1.address, amount);
      const addr1Balance = await osakaToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(amount);

      const tokenData = await osakaToken.getTokenHolderData(addr1.address);
      expect(tokenData[1]).to.equal(addr1.address); // _to
      expect(tokenData[2]).to.equal(owner.address); // _from
      expect(tokenData[3]).to.equal(amount);        // _totalToken
      expect(tokenData[4]).to.equal(true);          // _tokenHolder
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
      const amount = ethers.utils.parseEther("10");
      await expect(
        osakaToken.connect(addr1).transfer(owner.address, amount)
      ).to.be.revertedWith("Insufficient balance");
    });
  });

  describe("Approvals", function () {
    it("Should approve tokens for delegated transfer", async function () {
      await osakaToken.approve(addr1.address, 1000);
      expect(await osakaToken.allowance(owner.address, addr1.address)).to.equal(1000);
    });
  });

  describe("TransferFrom", function () {
    it("Should transfer tokens using allowance", async function () {
      const approveAmount = ethers.utils.parseEther("50");
      const transferAmount = ethers.utils.parseEther("20");

      await osakaToken.approve(addr1.address, approveAmount);

      await osakaToken.connect(addr1).transferFrom(
        owner.address,
        addr2.address,
        transferAmount
      );

      expect(await osakaToken.balanceOf(addr2.address)).to.equal(transferAmount);
      expect(await osakaToken.allowance(owner.address, addr1.address)).to.equal(
        approveAmount.sub(transferAmount)
      );
    });
  });

  describe("Token Holder Data", function () {
    it("Should return correct token holder addresses", async function () {
      await osakaToken.transfer(addr1.address, 10);
      const holders = await osakaToken.getTokenHolder();
      expect(holders).to.include(addr1.address);
    });
  });
});
