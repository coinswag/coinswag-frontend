import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  multiInjectedProviderDiscovery: false,
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "Coinswag",
      preference: "all",

      version: "4",
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});
