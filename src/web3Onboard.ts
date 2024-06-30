import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
// import infinityWalletModule from '@web3-onboard/infinity-wallet'
// import fortmaticModule from '@web3-onboard/fortmatic'
// import safeModule from '@web3-onboard/gnosis'
// import keepkeyModule from '@web3-onboard/keepkey'
// import keystoneModule from '@web3-onboard/keystone'
// import ledgerModule from '@web3-onboard/ledger'
// import portisModule from '@web3-onboard/portis'
// import trezorModule from '@web3-onboard/trezor'
// import walletConnectModule from '@web3-onboard/walletconnect'
// import coinbaseModule from '@web3-onboard/coinbase'
// import magicModule from '@web3-onboard/magic'
// import dcentModule from '@web3-onboard/dcent'
// import sequenceModule from '@web3-onboard/sequence'
// import tahoModule from '@web3-onboard/taho'
// import trustModule from '@web3-onboard/trust'
// import okxModule from '@web3-onboard/okx'
// import frontierModule from '@web3-onboard/frontier'
// import ConnectWallet from './ConnectWallet'

import { baseSepolia, anvil } from "wagmi/chains";
import wagmi from "@web3-onboard/wagmi";
import coinbaseWalletModule from "@web3-onboard/coinbase";

const coinbaseWalletSdk = coinbaseWalletModule();

const chains = [
  {
    id: baseSepolia.id,
    token: baseSepolia.nativeCurrency.symbol,
    label: baseSepolia.name,
    rpcUrl: baseSepolia.rpcUrls.default.http[0],
  },
  {
    id: anvil.id,
    token: anvil.nativeCurrency.symbol,
    label: anvil.name,
    rpcUrl: anvil.rpcUrls.default.http[0],
  },
];
const wallets = [coinbaseWalletSdk, injectedModule()];
export const web3Onboard = init({
  wagmi,
  wallets,
  chains,
  appMetadata: {
    name: "CoinSwag Stores",
    // icon: "<svg>App Icon</svg>",
    description: "CoinSwag Store",
  },
});

// npm install @web3-onboard/react @web3-onboard/injected-wallets @web3-onboard/infinity-wallet @web3-onboard/fortmatic @web3-onboard/gnosis @web3-onboard/keepkey @web3-onboard/keystone @web3-onboard/ledger @web3-onboard/portis @web3-onboard/trezor @web3-onboard/walletconnect @web3-onboard/coinbase @web3-onboard/magic @web3-onboard/dcent @web3-onboard/sequence @web3-onboard/taho @web3-onboard/trust @web3-onboard/frontier @web3-onboard/okx
