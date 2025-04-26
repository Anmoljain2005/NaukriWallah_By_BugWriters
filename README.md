# 📄 NaukriWallah — Decentralized Job Marketplace

> Connecting employers and freelancers directly, without centralized intermediaries.

---

## 🚀 Project Objective

Build a **trustless** job marketplace where:

- ✅ Employers **post jobs** with **escrowed payments** locked in smart contracts.
- ✅ Freelancers **browse, apply**, and get selected transparently.
- ✅ **Smart contracts** automatically:
  - 💰 Hold funds securely during work.
  - ✅ Release payment once work is approved.
  - ⚖️ Handle disputes (admin resolves disputes if any).
- 🛠️ Powered by Solidity, Hardhat, React.js, and MetaMask.

---

## ✨ Key Features

- 🌍 **Decentralized Job Board** — No intermediaries, fully peer-to-peer.
- ⚖️ **Smart Contract Governance** — Escrow, assignment, and payout automation.
- 🛡️ **Secure Payments** — Funds locked on job posting, released on task completion.
- 🧑‍💻 **Simple, Intuitive UI** — React.js frontend integrated with MetaMask.
- 💬 **Real-time Messaging** — Integrated CometChat API for freelancer-client chat.
- ⚙️ **Self-Hosted Prototype** — Local Hardhat network for testing.

---

## 🛠️ Tech Stack

| Layer         | Tools/Frameworks                                    |
|---------------|-----------------------------------------------------|
| **Frontend**  | React.js, Tailwind CSS, Ethers.js                   |
| **Smart Contracts** | Solidity, Hardhat, OpenZeppelin Contracts |
| **Wallet Integration** | MetaMask                                   |
| **Off-Chain Services** | Node.js, CometChat API (chat)              |
| **Version Control** | GitHub                                         |

---

## 📂 Project Structure

```
NaukriWallah_By_BugWriters/
├── build/          # Production frontend build
├── cache/          # Hardhat cache files
├── node_modules/   # Dependencies
├── public/         # Static assets
├── scripts/        # Deployment and seeder scripts
├── src/
│   ├── abis/       # Contract ABIs
│   ├── components/ # UI components (Job cards, CreateJob, Header, Footer, etc.)
│   ├── contracts/  # Smart contracts (JobBoard.sol)
│   ├── pages/      # Main frontend pages (Home, Jobs, MyBids, etc.)
│   ├── services/   # Blockchain and Chat service handlers
│   ├── store/      # Global state management
│   └── utils/      # Utilities and styling
├── test/           # Unit tests for smart contracts
├── .env            # Environment variables
└── Other configs   # Hardhat, yarn/npm, etc.
```

---

## 🏗️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anmoljain2005/NaukriWallah_By_BugWriters.git
   cd NaukriWallah_By_BugWriters
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start Hardhat local blockchain**
   ```bash
   yarn hardhat node
   ```

4. **Deploy the smart contracts**
   ```bash
   yarn hardhat run scripts/deploy.js --network localhost
   ```

5. **Start the React frontend**
   ```bash
   yarn start
   ```

6. **Connect MetaMask**
   - Connect to `localhost:8545` network manually.
   - Import an account using Hardhat's generated private keys.

---

## ✅ Deliverables Checklist

- 📜 **Smart Contract** (JobBoard.sol)
  - Add job listings
  - Accept bids
  - Escrow funds
  - Release payment
  - Handle disputes (optional)
- 🧪 **Testing**
  - Tested job posting, bidding, and payment workflows via Hardhat.
- 🖥️ **Frontend**
  - Dynamic job listing, applications, escrowed payment release.
  - Wallet connection and error handling.
- 🔒 **Security**
  - No personal data on-chain, only Ethereum addresses and job metadata.
  - Prevents double bidding, unauthorized payout, and reentrancy attacks.

---

## 📈 Future Enhancements

- ⭐ Implement **rating/reputation system** for freelancers and employers.
- ⭐ Enable **decentralized dispute resolution** (DAO-based voting).
- ⭐ Multi-signature wallet support for team hiring.

---

## Contributors

Team -Bug_Writers

| Name | GitHub | Roll Number |  
|-------|--------|-------------|  
| **Anmol Jain** | [Anmol Jain](https://github.com/Anmoljain2005) | 230008009 |  
| **Priyanshu Patel** | [Priyanshu Patel](https://github.com/Priyanshu7058) | 230008026 |  
| **Mitanshu Kumawat** | [Mitanshu Kumawat](https://github.com/MitanshuKumawat) | 230008022 |  
| **Nidarsana M** | [Nidarsana M](https://github.com/Nidarsana02) | 230004031 |  
| **Tripti Anand** | [Tripti Anand](https://github.com/Tripti1298) | 230001078 |  
| **Nandini Kumari** | [Nandini Kumari](https://github.com/dini-5002) | 230001056 |  

---

## 📜 Acknowledgement

This project is a part of the course CS-218: Programmable and Interoperable Blockchains under the guidance of Dr. Subhra Mazumdar.

---

> Built by **Bug_Writers** (DeCentrix) | Indian Institute of Technology Indore

---

Would you also like a **smaller badge section** (example: `Built with Hardhat`, `OpenZeppelin Secured`, `MetaMask Ready`) for the top of the `README.md`? 🚀🎯  
It'll make the GitHub page look even more polished!  
(If yes, I can add that quickly too!) ✅
