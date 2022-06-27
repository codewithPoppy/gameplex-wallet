import GameplexLoader from "../../components/GameplexLoader";
import { randomIntFromInterval } from "../../utils/numberUtils";
import { ellipseAddress } from "../../utils/textUtils";
import AssetsMainView from "../../views/assetsView/AssetsMainView";
import MyCollectionView from "../../views/myCollectionView";

import React from "react";

type HomeComponentProps = {
  collections: { uri: string; address: string }[];
  assets: {
    assetAddress: string;
    assetAmount: number;
    assetAmountInUSD: number;
    assetImage: string;
    assetName: string;
    assetPercentChange: number;
    assetSymbol: string;
  }[];
  address: string;
};

function HomeComponent({ collections, assets, address }: HomeComponentProps) {
  const profileImage = !process.env.NEXT_PUBLIC_STORYBOOK
    ? "/images/nfts/" + randomIntFromInterval(1, 21) + ".webp"
    : "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA";
  const walletAddress = ellipseAddress(address, 4);
  const walletBalance = "17.890.894,24";
  const walletBalanceChange = randomIntFromInterval(-10000, 10000);
  const walletBalancePercentChange = randomIntFromInterval(-10.0, 10.0);
  return (
    <React.Fragment>
      {/* Main Content - My Collection */}
      {/* Divide into two sections */}
      <div className="flex flex-col md:flex-row mx-3 mt-0 pb-3 ">
        {/* Left section */}
        <div className="w-full bg-[#121212] rounded-t-xl md:rounded-l-xl md:rounded-r-none lg:w-[420px] min-w-[420px] max-w-[420px] md:w-[40%]">
          {/* Assets View */}
          <AssetsMainView
            profileImage={profileImage}
            walletAddress={walletAddress}
            walletBalance={walletBalance}
            walletBalanceChange={walletBalanceChange}
            walletBalancePercentChange={walletBalancePercentChange}
            assets={assets || []}
            onAssetClick={() => {}}
          ></AssetsMainView>
        </div>
        {/* Right section */}
        <div className="w-full lg:w-full mx-auto bg-[#121212] rounded-b-xl md:rounded-r-xl">
          {/* Grid of Cards */}
          {collections?.length > 0 ? (
            <MyCollectionView collections={collections}></MyCollectionView>
          ) : (
            <div className="container mx-auto min-h-screen flex justify-center items-center">
              <div className="w-16 h-16 place-content-center">
                <GameplexLoader />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;
