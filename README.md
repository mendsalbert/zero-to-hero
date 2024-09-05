# Zero2Hero - Waste Management

Zero2Hero is an innovative waste management and community engagement platform built on blockchain technology. It incentivizes users to report and collect waste while providing a gamified experience with rewards and a lottery system.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Key Features](#key-features)
3. [How It Works](#how-it-works)
4. [Project Structure](#project-structure)
5. [Smart Contract](#smart-contract)
6. [Frontend](#frontend)
7. [Backend](#backend)
8. [Integration of Key Technologies](#integration-of-key-technologies)
9. [Setup and Installation](#setup-and-installation)

## Technologies Used

- Next.js
- React
- TypeScript
- Solidity
- Ethers.js
- Tailwind CSS
- Sign Protocol
- Lit Protocol
- Chainlink (Price Feed, VRF, and Functions)
- Web3Auth
- IPFS

## Key Features

- Waste reporting and collection
- Token-based reward system
- Dynamic reward calculation based on ETH price
- Weekly lottery for additional rewards
- User authentication with Web3Auth
- Encrypted waste data storage using Lit Protocol
- On-chain attestations using Sign Protocol
- Real-time ETH price feed using Chainlink
- Interactive map for waste hotspots
- User dashboard with notifications and rewards

## How It Works

1. Users authenticate using Web3Auth.
2. Users can report waste locations and quantities through the app.
3. Reported waste data is encrypted using Lit Protocol and stored on IPFS.
4. Users earn RWT (Reward Token) for reporting and collecting waste.
5. The reward amount is dynamically calculated based on the current ETH price (Chainlink Price Feed).
6. A weekly lottery gives users a chance to win additional rewards.
7. User activities and rewards are recorded as on-chain attestations using Sign Protocol.
8. The app provides a dashboard for users to track their rewards, level, and notifications.

## Project Structure

1. Smart Contract (`/contracts`)
   - `Zero2Hero.sol`: Core smart contract handling token management, rewards, lottery, and Chainlink integrations.

2. Utils (`/src/utils`)
   - `Zero2Hero.json`: ABI for the smart contract.
   - `contractInteraction.ts`: Functions for smart contract interactions.
   - `litProtocol.ts`: Handles encryption and decryption using Lit Protocol.
   - `signAttestations.ts`: Creates on-chain attestations using Sign Protocol.
   - `signSchemas.ts`: Defines schemas for Sign Protocol attestations.
   - `db/actions.ts`: Handles database operations for user rewards and notifications.

3. Hooks (`/src/hooks`)
   - `useMediaQuery.ts`: Custom hook for responsive design.
   - `useSessionSigs.ts`: Manages Web3Auth sessions and Lit Protocol authentication.

4. Components (`/src/components`)
   - `ContractInteraction.tsx`: Interface for waste reporting and contract interactions.
   - `Header.tsx`: Navigation bar with Web3Auth integration.
   - `Map.tsx`: Interactive map for waste reporting and hotspot visualization.
   - `Sidebar.tsx`: Main navigation menu.
   - `UserDashboard.tsx`: Displays user rewards and notifications.
   - `createSchemas.tsx`: Component to create Sign Protocol schemas.

5. Scripts (`/src/scripts`)
   - `createSchemas.js`: Script to create Sign Protocol schemas programmatically.

## Smart Contract

The `Zero2Hero.sol` contract is the core of the platform, handling:
- ERC20 token implementation (RWT - Reward Token)
- Dynamic reward calculation based on ETH price
- Weekly lottery using Chainlink VRF for randomness
- Chainlink Price Feed integration for real-time ETH prices
- Chainlink Functions for external data fetching

## Frontend

Built with Next.js, React, and TypeScript, key components include:
- `Header.tsx`: Navigation and user authentication
- `Sidebar.tsx`: Main navigation menu
- `Map.tsx`: Interactive map for waste reporting and hotspots
- `ContractInteraction.tsx`: Interface for interacting with the smart contract
- `UserDashboard.tsx`: Display user rewards and notifications

## Backend

The backend functionality is primarily handled by the smart contract and various utility functions:
- `contractInteraction.ts`: Functions for interacting with the Zero2Hero contract
- `litProtocol.ts`: Functions for encrypting and decrypting waste data
- `signAttestations.ts`: Functions for creating on-chain attestations
- `signSchemas.ts`: Defines schemas for Sign Protocol attestations

## Integration of Key Technologies

### Sign Protocol
- Used in `signAttestations.ts` and `signSchemas.ts` to create on-chain attestations for user activities.
- `createSchemas.tsx` and `createSchemas.js` are used to set up the attestation schemas.

### Lit Protocol
- Integrated in `litProtocol.ts` for encrypting and decrypting waste data.
- Used in `Map.tsx` and `ContractInteraction.tsx` for secure data handling.
- `useSessionSigs.ts` hook manages Lit Protocol authentication.

### Chainlink
- Price Feed: Used in `Zero2Hero.sol` to get real-time ETH prices for dynamic reward calculation.
- VRF (Verifiable Random Function): Implemented in `Zero2Hero.sol` for the lottery system.
- Functions: Integrated in `Zero2Hero.sol` for external data fetching.

### Web3Auth
- Implemented in `Header.tsx` for user authentication.
- `useSessionSigs.ts` hook manages Web3Auth sessions.

### IPFS
- Used in `litProtocol.ts` for storing encrypted waste data.

## DIMO 

Zero2Hero now incorporates DIMO (Decentralized Internet of Mobility) to enhance its waste management capabilities and promote eco-friendly driving habits. This integration aligns with the project's goal of environmental sustainability and community engagement.

### Key Components

1. DIMO API Handler (`src/pages/api/dimo.ts`)
   - Manages server-side interactions with the DIMO API
   - Handles authentication and data fetching for user devices, vehicle status, and trip data
   - Ensures secure communication between the application and DIMO services

2. DIMO API Utility (`src/utils/dimoApi.ts`)
   - Provides client-side functions to interact with the DIMO API
   - Includes fallback to dummy data for development and testing purposes
   - Fetches user devices, vehicle data, and trip information

3. DIMO Eco Score Component (`src/components/DimoEcoScore.tsx`)
   - Calculates and displays an eco-score based on DIMO data
   - Considers fuel efficiency and eco-friendly trips
   - Encourages users to adopt more sustainable driving habits

4. DIMO Vehicle Data Component (`src/components/DimoVehicleData.tsx`)
   - Displays detailed vehicle information from DIMO
   - Provides users with insights into their vehicle's status and performance

### Importance and Relation to Zero2Hero

1. Environmental Impact Tracking:
   - The DIMO integration allows users to monitor their vehicle's environmental impact
   - Eco scores incentivize users to adopt more sustainable driving habits, aligning with Zero2Hero's waste reduction goals

2. Community Engagement:
   - By incorporating vehicle data, Zero2Hero expands its scope beyond waste management
   - Users can see how their driving habits contribute to overall environmental efforts

3. Data-Driven Insights:
   - DIMO data can be used to correlate driving patterns with waste generation and collection activities
   - This information can help optimize waste collection routes and schedules

4. Gamification and Rewards:
   - The eco-score system adds another dimension to the app's gamification strategy
   - Users can earn additional rewards for maintaining high eco-scores, further encouraging sustainable behaviors

5. Holistic Approach to Sustainability:
   - By combining waste management with vehicle efficiency tracking, Zero2Hero provides a more comprehensive platform for environmental consciousness
   - This approach emphasizes that sustainability efforts extend beyond waste management to everyday activities like driving

The DIMO integration enhances Zero2Hero's capabilities, providing users with a more comprehensive tool for managing their environmental impact. It reinforces the project's commitment to sustainability by addressing multiple aspects of users' daily lives and encouraging eco-friendly behaviors across different domains.