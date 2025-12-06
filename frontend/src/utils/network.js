import { COSTON2_CONFIG } from '../config';

export async function switchToCoston2() {
  if (typeof window.ethereum === 'undefined') {
    throw new Error('MetaMask not installed');
  }

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${COSTON2_CONFIG.chainId.toString(16)}` }],
    });
  } catch (switchError) {
    // Chain not added, let's add it
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: `0x${COSTON2_CONFIG.chainId.toString(16)}`,
            chainName: COSTON2_CONFIG.chainName,
            rpcUrls: [COSTON2_CONFIG.rpcUrl],
            nativeCurrency: COSTON2_CONFIG.nativeCurrency,
            blockExplorerUrls: [COSTON2_CONFIG.blockExplorer]
          }],
        });
      } catch (addError) {
        throw new Error('Failed to add Coston2 network');
      }
    } else {
      throw switchError;
    }
  }
}

export async function checkNetwork() {
  if (typeof window.ethereum === 'undefined') {
    return false;
  }

  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  return parseInt(chainId, 16) === COSTON2_CONFIG.chainId;
}
