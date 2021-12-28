const Zazzle = artifacts.require("Zazzle")
 
contract("Zazzle", (accounts) => {
    // console.log(accounts)
    before(async () => {
        zazzle = await Zazzle.deployed()
    })
    it("give 1M token", async () => {
        let balance = await zazzle.balanceOf(accounts[0])
            balance = web3.utils.fromWei(balance, 'ether')
            assert.equal(balance, '1000000', "Balance should be 1M")
    })
    it("can tranfer tokens btw acc", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await zazzle.transfer(accounts[1], amount, { from: accounts[0] })
        let balance = await zazzle.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance should be 1k")

    })
})