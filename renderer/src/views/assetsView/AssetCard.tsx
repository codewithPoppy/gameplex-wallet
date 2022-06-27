//! TODO need to move useQuery to a common place
//! TODO Then we can remove this file

import { AssetCardView } from "./AssetComponents";
// Left Side Assets View (My Collection)
import get from "lodash.get";
import { useQuery } from "react-query";
import { getAccount } from "../../web3/solscan/api";

function AssetCard({ asset, onAssetClick }) {
  let amountInUSD;
  if (!process.env.NEXT_PUBLIC_STORYBOOK) {
    const { data: assetData } = useQuery(
      ["assetData", { address: get(asset, "assetAddress", "") }],
      getAccount,
      { enabled: !!get(asset, "assetAddress", "") }
    );
    amountInUSD =
      Math.round(
        get(assetData, "data.tokenInfo.price", 0) *
          get(asset, "assetAmount", 1) *
          100
      ) / 100;

    if (!Boolean(asset.assetAmount)) return null;
  } else {
    amountInUSD = 1000;
  }

  return (
    <AssetCardView
      asset={asset}
      amountInUSD={amountInUSD}
      onAssetClick={onAssetClick}
    />
  );
}

export default AssetCard;
