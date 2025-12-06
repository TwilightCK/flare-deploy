// Contract addresses - Deployed on Flare Coston2
export const GAME_MATCH_ADDRESS = import.meta.env.VITE_GAME_MATCH_ADDRESS || "0x88a5b08F441730b2D452d1F9642b63Cb6b09B251";
export const ACCOUNT_FACTORY_ADDRESS = import.meta.env.VITE_ACCOUNT_FACTORY_ADDRESS || "0x5eE66faA4d6867076E4750e36fcF4B093060898B";

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
