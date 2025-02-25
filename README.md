# GameFair

This shows How to start GameFair Lottery DApp with NextJs, Solidity, and CometChat on Crossfi testnet Chain:

<div align="center">
  <img src="./screenshots/0.gif" alt="Creating a Lottery" />
  <p><strong>Creating a Lottery</strong></p>
</div>

<div align="center">
  <img src="./screenshots/1.gif" alt="Purchasing Ticket" />
  <p><strong>Purchasing Ticket</strong></p>
</div>

<div align="center">
  <img src="./screenshots/2.gif" alt="Live Chat" />
  <p><strong>Live Chat</strong></p>
</div>


## Technology

This demo uses:

- Metamask
- Hardhat
- Infuira
- NextJs
- Tailwind CSS
- Solidity
- EthersJs
- Faucet

## Running the demo

To run the demo follow these steps:

1. Clone the project with the code below.

   ```sh

   # Make sure you have the above prerequisites installed already!
   git clone https://github.com/Gola-k/LuckSphere
   cd dappLottery # Navigate to the new folder.
   yarn install # Installs all the dependencies.
   ```

2. Head to [CometChat](https://try.cometchat.com) and create a project.

3. Create a `.env.local` file to include the following details.
   ```sh
    NEXT_PUBLIC_APP_ID=<APP_ID>
    NEXT_PUBLIC_AUTH_KEY=<AUTH_KEY>
    NEXT_PUBLIC_REGION=<REGION>
   ```
4. Run the app using `yarn dev`
   <br/>

## Adding CrossFi Testnet to MetaMask

1. **Open MetaMask** and click on the network dropdown at the top of the MetaMask window (where it says "Ethereum Mainnet" by default).

2. **Select** "Add Network" at the bottom.

3. In the **Network Name**, enter the following details for the CrossFi testnet:

   - **Network Name**: CrossFi Testnet
   - **New RPC URL**: `[https://rpc.testnet.crossfi.network](
   - **Chain ID**: `4157`
   - **Currency Symbol**: `XFI`
   - **Block Explorer URL**: `[https://testnet.blockchain.explorer](https://test.xfiscan.com/dashboard)`

4. **Save** the network configuration.

---

## Getting XFI Tokens for Transactions

To get some XFI tokens for making transactions, follow these steps:

1. Go to the [CrossFi Faucet](https://crossfi.faucetme.pro/) (or similar URL if available for the testnet).
2. Enter your **MetaMask wallet address** and request some **XFI tokens** for testing.
3. Once received, you'll be able to use the XFI tokens to interact with the GameFair Lottery DApp.

---

Once these steps are completed, you'll be able to interact with the GameFair Lottery DApp and use XFI tokens for purchasing tickets and participating in lotteries. 

---

**Note**: Make sure your MetaMask is connected to the CrossFi Testnet whenever you interact with the DApp.

## Useful links

- 🏠 [Website](https://lucks-phere.vercel.app/)
- ⚽ [Metamask](https://metamask.io/)
- 🚀 [Infuria](https://app.infura.io/dashboard/)
- 💡 [Hardhat](https://hardhat.org/)
- 🔥 [NextJs](https://nextjs.org/)
- 🐻 [Solidity](https://soliditylang.org/)
- 👀 [Ethersjs](https://docs.ethers.io/v5/)
- 🎅 [CometChat](https://try.cometchat.com/daltonic)
- ✨ [Live Demo](https://lucks-phere.vercel.app/)
