import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AssetsView } from "../../renderer/src/views/assetsView/AssetComponents";

export default {
  title: "Page/Home/AssetsView",
  component: AssetsView,
} as ComponentMeta<typeof AssetsView>;

const Template: ComponentStory<typeof AssetsView> = (args) => (
  <div className="w-full bg-[#121212] rounded-t-xl md:rounded-l-xl md:rounded-r-none lg:w-[420px] min-w-[420px] max-w-[420px] md:w-[40%]">
    <AssetsView {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  assets: [
    {
      assetImage:
        "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      assetName: "Tom",
      assetSymbol: "$",
      assetAmount: "100",
    },
    {
      assetImage:
        "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      assetName: "Tom",
      assetSymbol: "$",
      assetAmount: "100",
    },
    {
      assetImage:
        "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      assetName: "Tom",
      assetSymbol: "$",
      assetAmount: "100",
    },
    {
      assetImage:
        "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      assetName: "Tom",
      assetSymbol: "$",
      assetAmount: "100",
    },
  ],
  profileImage:
    "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
  walletAddress: "yuwehhf",
  onAssetClick: () => {},
  balance: 1000,
  accounts: [
    {
      accountName: "Solana",
      accountSymbol: "SOL",
      accountAddress: "tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D",
      accountImage: "/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png",
      accountAmount: "NA",
    },
    {
      accountName: "Ethereum",
      accountSymbol: "ETH",
      accountAddress: "tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D",
      accountImage: "/chain-logos/eip155-1.png",
      accountAmount: "NA",
    },
    {
      accountName: "Cosmos",
      accountSymbol: "ATOM",
      accountAddress: "tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D",
      accountImage: "/chain-logos/cosmos-cosmoshub-4.png",
      accountAmount: "NA",
    },
  ],
};
