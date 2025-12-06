// Contract addresses - UPDATE THESE AFTER DEPLOYMENT
export const GAME_MATCH_ADDRESS = import.meta.env.VITE_GAME_MATCH_ADDRESS || "0x0000000000000000000000000000000000000000";
export const ACCOUNT_FACTORY_ADDRESS = import.meta.env.VITE_ACCOUNT_FACTORY_ADDRESS || "0x0000000000000000000000000000000000000000";

// Network configuration
export const COSTON2_CONFIG = {
  chainId: 114,
  chainName: "Flare Coston2 Testnet",
  rpcUrl: "https://coston2-api.flare.network/ext/C/rpc",
  blockExplorer: "https://coston2-explorer.flare.network/",
  nativeCurrency: {
    name: "Coston2 Flare",
    symbol: "C2FLR",
    decimals: 18
  }
};

// FTSO Registry on Coston2
export const FTSO_REGISTRY = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

// Game configuration
export const MIN_STAKE = "0.01"; // in FLR
export const GAME_DURATION = 300; // 5 minutes in seconds
