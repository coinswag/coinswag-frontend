import { http, createConfig } from "wagmi";
import { anvil, baseSepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [baseSepolia, anvil],
  connectors: [
    coinbaseWallet({
      appName: "CoinSwag",
      preference: "all",
      version: "4",
    }),
    injected(),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
    [anvil.id]: http(),
  },
});
