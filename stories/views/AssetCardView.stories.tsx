import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AssetCardView } from "../../renderer/src/views/assetsView/AssetComponents";
export default {
  title: "Page/Home/AssetCard",
  component: AssetCardView,
} as ComponentMeta<typeof AssetCardView>;

const Template: ComponentStory<typeof AssetCardView> = (args) => (
  <div className="w-full bg-[#121212] rounded-t-xl md:rounded-l-xl md:rounded-r-none lg:w-[420px] min-w-[420px] max-w-[420px] md:w-[40%]">
    <AssetCardView {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  asset: {
    assetImage:
      "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    assetName: "Tom",
    assetSymbol: "$",
    assetAmount: "100",
  },
  onAssetClick: () => {},
  amountInUSD: "1000",
};
