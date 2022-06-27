// Left Side Assets View (My Collection)
import get from "lodash.get";
import { useQuery } from "react-query";
import SettingsStore from "../../store/SettingsStore";
import { getAccount } from "../../web3/solscan/api";
import { AssetsView } from "./AssetComponents";
function AssetsMainView({
  profileImage,
  walletAddress,
  walletBalance,

  walletBalanceChange,
  walletBalancePercentChange,
  assets,
  onAssetClick,
}) {
  let accountData = {};

  if (!process.env.NEXT_PUBLIC_STORYBOOK) {
    const { data } = useQuery(
      ["getAccount", { address: walletAddress }],
      getAccount,
      { enabled: !!walletAddress }
    );

    accountData = data;
  }

  const accounts = [
    {
      accountName: "Solana",
      accountSymbol: "SOL",
      accountAddress: SettingsStore.state.solanaAddress,
      accountImage: "/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png",
      accountAmount: "NA",
    },
    {
      accountName: "Ethereum",
      accountSymbol: "ETH",
      accountAddress: SettingsStore.state.eip155Address,
      accountImage: "/chain-logos/eip155-1.png",
      accountAmount: "NA",
    },
    {
      accountName: "Cosmos",
      accountSymbol: "ATOM",
      accountAddress: SettingsStore.state.cosmosAddress,
      accountImage: "/chain-logos/cosmos-cosmoshub-4.png",
      accountAmount: "NA",
    },
  ];

  return (
    <AssetsView
      profileImage={profileImage}
      walletAddress={walletAddress}
      assets={assets}
      onAssetClick={onAssetClick}
      balance={get(accountData, "data.lamports", 0) / 1000000000}
      accounts={accounts}
    />
  );
}

export default AssetsMainView;
