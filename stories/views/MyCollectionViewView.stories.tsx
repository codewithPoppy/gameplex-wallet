import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyCollectionView from "../../renderer/src/views/myCollectionView";
export default {
  title: "Page/Home/MyCollectionView",
  component: MyCollectionView,
} as ComponentMeta<typeof MyCollectionView>;

const Template: ComponentStory<typeof MyCollectionView> = (args) => (
  <MyCollectionView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  collections: [
    {
      uri: "https://arweave.net/hy8sI2F2MjncYFmzvgB_tNvOLJ4bqa_UklZZPULzkF0",
      address: "7PnT27EvvcoMaoda4grjaDVBJ5UzQ3JAerhwtJ7tz1wr",
    },
    {
      uri: "https://arweave.net/Z4awuAKCsi-YqdWIzKM7YYUJGT_7gLHHKrNuFACw-no",
      address: "H3tbyV2MnvtfZMaNdQ8Bit84fTwWjXyMeu7w7ZNkCMr",
    },
    {
      uri: "https://arweave.net/ifZUtXhsygpFVRGhkybCHuLoCTeI2f76R2Vs2T1Q14o",
      address: "B9d2rXcYuchaSZTvW19xTYmoSZHy5c42fzBcRsWiR9Ge",
    },
    {
      uri: "https://arweave.net/zs4cP5VuFPuCnh4OAlqghoTfC1RMlelYlGToRfMXnFM",
      address: "FWHhBJi1yU7wNRETfzCi8StJ6Rv2DSWJYG4L9VyB7DLo",
    },
    {
      uri: "https://arweave.net/7dSiQWDtg8nXK_DitXjoCIswrIxAjaVwBXSsW0xpmZk",
      address: "ESV6uaputtn2t3ZW7Vo2nfqJV1qW2LdaQ4yvPnqo3EcD",
    },
    {
      uri: "https://arweave.net/yNC4FpL9qu5lQk3_8vQ_jULXG_RYDwXwnIfyHOhUJhU",
      address: "D43DoQtdScwps3ThVaSMHjdcE36fU7gG6sHxJJMcWjvT",
    },
    {
      uri: "https://arweave.net/ufrQXrwrqP0fQos5ZOOn5kD1LZzw2W_HEl8YOd_aWYQ",
      address: "6qExstcaoNucEji7ksfbgoPhbqFc6CSK5xK26fRJZkBV",
    },
    {
      uri: "https://arweave.net/f-TaU_VSJOHbe-w57W0BFkviwAVpTYMpNL2I3AM2gTI",
      address: "5MBUWoycQEo2EdrRaEmeHaEi19aBYk3f4zJCmX38WCbL",
    },
    {
      uri: "https://arweave.net/uixrCNcJI4DowXQZQMRgq9O0TsWyEeYP3Hne9Xh0f0E",
      address: "BxQEF7TtLvbjakeHCUL3snQBncdgUpNCbnbdwPopsKfA",
    },
    {
      uri: "https://arweave.net/asb1JNE2PDOishPsS2W01wQ6FBWwUm4so_Jyb2HUFfA",
      address: "HkrfXttSdzWJCszMThbkSUM9Gu4gW2diZadtXGgPvG8U",
    },
    {
      uri: "https://arweave.net/pICT3dwTqcN8sFGugvAPA26tCBRS1e1LZdLfemN_VAs",
      address: "yt7vmFqsaToeiXRPYvsyRDq57QtVRDho42pQek7tbPx",
    },
    {
      uri: "https://arweave.net/3eGa12zzHj8tVzI62PzrHXK1xrA1X1e2kvy5lCR59Xk",
      address: "xCrVVy82frLGzt2p2hsbdWSb8DtVJZvv4WEd4VGeZuz",
    },
    {
      uri: "https://sumitrees.s3.ap-northeast-1.amazonaws.com/static/coupon.json",
      address: "9NDesL2Qx9dEmqRdpRPFBHKEXSLSubp7CfPuhEBPdpDM",
    },
    {
      uri: "https://arweave.net/Fd7GRBxeuDRzhY2LfuEXrP1k6H7ALy_n3NlxUzF4sPw",
      address: "4Z6BmVWkLYmpuDEjbtpsm9GFTczidkspojeDxf8Kmcm6",
    },
    {
      uri: "https://arweave.net/z_ATIN4DV06k8xn0wnLRKTIC8k3xtW9HKY4X1o4FAnw",
      address: "APUXxzCk18Ave54tRK5RQtpWU8redmyibB2wBfHqNGfc",
    },
    {
      uri: "https://arweave.net/VIUUC8Vg_A3nhF58CYgW4OwcKxLj-UV6Dxk5nK5bt08",
      address: "7kdML8HDsr8EaEcnwBuECZ8QGQ4rHcBTo981jTpeidRK",
    },
    {
      uri: "https://arweave.net/IFax6Z3fYhsEQaPB3ViP6nAOIMJVbhip7UbZSL6fCLs",
      address: "6rW4FRCPtLaq2crK8zTiHdVfMuhVh7gqYb2NFtNGtNh2",
    },
    {
      uri: "https://arweave.net/8YNQSpW_TEWPSX7tF8Wb4s3FUYDMziOA7hzolLuDtbY",
      address: "UadXqBhav2V5BMPqWxxGxeRb84mgrUFFE35nUfN5BFX",
    },
    {
      uri: "https://arweave.net/MsmtdNMX__9t0_0F26zULr9tgKNKDuJx7SDhF6XtcVc",
      address: "dCNDDMpHtUcdQTqA41sn5GjCXVyDM4JvmiW8BM3wVo7",
    },
    {
      uri: "https://arweave.net/BjE1wA0QDUTsbID7jPMnHedB3Mft2vNvGYSB1l_nA2o",
      address: "HR26iJU48TgWLTNHLUFZbNbKJVHFG9fPDU9Up1uXtYpW",
    },
    {
      uri: "https://arweave.net/AFOUbvK6j5HFL01IIY-6p7AkY0JXTqpzV9k3lpTCk34",
      address: "7TBGEeCMjrmqa3NtkCyDydpzNGgETz8GhEJMvg7k4FxR",
    },
    {
      uri: "https://arweave.net/ZfLnchOxK0KogFapFHCzmgYgfHWC09PC9hK3K23xy24",
      address: "3mJVFFUc1dVvwLfpJHVLCtZ37Kg264fdBt9dshBtz9pP",
    },
    {
      uri: "https://arweave.net/_eOyH10cwpf2EGUgJZO-d4nkSz3X6N_MV7L1vb_OxVc",
      address: "22GA8tMzsKQSqDXa5sU3pFbDD72vfx9cHvZg67xF1G1F",
    },
    {
      uri: "https://arweave.net/8CqdayFxrsmyASCoLrtXAMpxQSwussSEgw7_hnAjod4",
      address: "54sMAVwpZkgGpdrAFRYHYFbg4pKWsGnrqMu5mrsGLHUB",
    },
    {
      uri: "https://arweave.net/nH6sXruZyaUY4CZ9aPU24IUFqYHyRHf4NFYnxGKoXwQ",
      address: "FJjVqkDnWeZ8jeAGMbux6u1fb9dx6ymH1nCE7zaQKRiM",
    },
    {
      uri: "https://arweave.net/g0kmK3G1goxdb5nJOhLYJV9b4Jc3YsofoI8So3waNnk",
      address: "9dmoUzUAbGagMabDfT6jAZVpVzKsyaq7kAJQhMPT9dYg",
    },
    {
      uri: "https://arweave.net/3-wafDpB1oc_mBmaqUmLfIxJQyUqxqNaa5J00M3uDpM",
      address: "CHUv2kJfhcMRRqVGzXf5FXUQPecn8Hw5kyFUPTNZ8ZkZ",
    },
    {
      uri: "https://arweave.net/jaZ0KUAop9kkkYD-XCtLbsy9Qeyrl8P8TC7VcBtcz1E",
      address: "GrvLfjz4zygKEvdpaJKbnhqk8r1ek9qxEnEyH9jdwNHw",
    },
    {
      uri: "https://arweave.net/Ltf1BC5hx4N8LaoRkQtqB3BVCBrkcoqC7ByB4njNj5Q",
      address: "FvgjKbmzfKXjZbeKP121vzrZPVHVaTysLuJpDZBC7scr",
    },
    {
      uri: "https://arweave.net/asWjTTifwh0jbTy2nUlMilhxR0GO-YD78AO59z954eU",
      address: "5CNP75yKuyH3jJBLinRij6EDPzDzQGpyyhMUDgBXKDs2",
    },
    {
      uri: "https://arweave.net/yfFDxPehj65gwVqbtT6WDVMi5RXZYH3-PDXReszMdkE",
      address: "3fjbSzP46iv93B2M96gtLxJW326xf9FDfVm6nbLCshoZ",
    },
    {
      uri: "https://arweave.net/JVwwOgllqAM4basRpmiqahx1P9L85Njq6B8e7ZzjQ40",
      address: "2kZB7SBS1vp7MNEDo9iuVJ5r37B4vLsdZooAA4TJBza1",
    },
    {
      uri: "https://arweave.net/oP9fr5Uh45PIb7cBmhbehLf-FSNJoD3BwbNm0unleDg",
      address: "J8uUNXYJLnbvCfADy9QsT28ZRPgs6YAx7kWb9iTotGs5",
    },
    {
      uri: "https://arweave.net/WXff5ib3g_cCdwfKlHIbIGma9R-SCIX-L2_-rVIbveM",
      address: "CZF4A1B2ogSKxsRtSRNuva5HGpcttyBKDp8Yj6v3NBVc",
    },
    {
      uri: "https://arweave.net/QyNkF9UUqsDrVhZWshwef3FCCw0plJXfYJMpCa5vGs8",
      address: "Ds3WuefFqrCMpHukZjrgWidkca712jYwhptXyaME6xN8",
    },
    {
      uri: "https://arweave.net/dwdOIm9lpmqhf--TUtuk7OV6PLQPbhGFOa4bXvVUjTg",
      address: "J5gSBm74kxPQz5KJiqE13V3r6yRpi4UmA8HXYtEwPmoT",
    },
    {
      uri: "https://arweave.net/TNpxV355xYnHf27dVXkO5Yao3dlF8vc-e8Hzr55JIGw",
      address: "AroiHrWcrbJECWPYvGMSGpvND35fvs2ftJ4AJsUPJikF",
    },
    {
      uri: "https://arweave.net/DYdquK626MLjbrVapvsi5UajnOFe-batjUnWFK8K4Ag",
      address: "AhAPGaM7nKjpx4GeJUKBKNuuTcctN7g5rc3CzRjf3a8i",
    },
    {
      uri: "https://arweave.net/AXjrOqMtp7WmndRoqretwN02Z6DPddo8b0FWtn515SQ",
      address: "4xKhrkFJDSfEjwRCsrnEEJVF39xw84mKx1yyuZupbGpe",
    },
    {
      uri: "https://arweave.net/bup1-NhaKMZ7zg9CeVYp_UmpSx91FBdga4ZigK5DYT4",
      address: "9SqdrssQbZ6fKwtpzQBri68rMKacv9ne2AzPp3xshCcH",
    },
    {
      uri: "https://arweave.net/3xime0DqBTxdMMW7ac-eDY-bg87bPNjuYPSvIjXxrcc",
      address: "5zWWzSiyQ8JxDpANBjKgtiBHqg1fTLb9YxdDekKKNBDm",
    },
    {
      uri: "https://arweave.net/ETmvYMAUt26bNp3NEz0YBXqGZcKuwurdxXq49fcg4xA",
      address: "B21FdZ1Pp9LEmbua3zXgRnUCBZ7GekavSfMWp4pcvTUj",
    },
    {
      uri: "https://arweave.net/yRnD0ah2NGWnzG4jVCOBeduacPhgx6w9fiCsRX8wUkE",
      address: "9KQXYbmsU7Qe4Xm6nBuNhrbY1E7KUAhkgTEeNsEBbMJC",
    },
    {
      uri: "https://arweave.net/2-MDmuROOqt4blvHu9rnu3XrOfSIWFIQndk17TSZKmA",
      address: "J2yJRjjFk959C4hMrBggz7eN4aeibQ3bqKJmvv2hKiuH",
    },
    {
      uri: "https://arweave.net/RelHfBrzfz5MXnbP7CXDEKldIk5azRWkpx_KVv9NIus",
      address: "BFqgKsMYyv5mcA1UXmDXaRibQ2Li1tiNFLbPSCrD2s8g",
    },
    {
      uri: "https://arweave.net/hpasd-1aoUtERy14_Ui27EHMWKmCNSIZCPSvU4b2RNY",
      address: "4nbEZUvkGAugX829t56pedDdAy8G1zD545gvSFzNhy4P",
    },
    {
      uri: "https://arweave.net/DJG_xRVQb_qW-Sw3e6jq9aErRNeS-2KMUi-y8ePSjb8",
      address: "5zrWb6Xe5p7ZeyRiMY6mCfDwJ5sWAY8R7jdDiEEKgzHy",
    },
    {
      uri: "https://arweave.net/zhMXfoJ9Exefw41uYQKrG0yQFZrYttAX2Ab7QKzLAjE",
      address: "BKh2rev5b8eGjxdYUmjAC2g7C7iR9SwhRzncXGi2GEg6",
    },
    {
      uri: "https://arweave.net/hNFjP4fD47udE6VE2wSDa4oYlHAhJlFtV_7jgk0JnXI",
      address: "G16qoD9h9g4Wvk1YwjnRPdk8XDWhhLxj6wmPuF1dYokA",
    },
    {
      uri: "https://arweave.net/k_IXXAa76t3YFYQXTTB3YduW-gJkqlrascK1pIPyZb8",
      address: "5mFim5DqU5ekr73ri3opzH5L5qj7NQptUCiZwdZpVqXi",
    },
    {
      uri: "https://arweave.net/hp2x4qUrM_eeIB_P6txTX659KK5LxwMUnT_Xisy1YY8",
      address: "4V26mZpUPujTw8KurYLYAiFPVzRdGgpPti8cToMo9qne",
    },
    {
      uri: "https://arweave.net/9_EwhTmTPh7bD-6L_zmmfKH0cX7PMT0nasXd63Ber_E",
      address: "GV7SkWqKHQ8LrKNi5C9XqWgQwnBSXMnbZJaP2ovZKmyJ",
    },
    {
      uri: "https://arweave.net/vhJ77GRtkRgw7LjTwnuyrQxmVFvjC5cH5vp9LXo8ASE",
      address: "3AXdaaJLfNYsuzB2ZbztSwbCpKQ3x54hviVVbVLk78eV",
    },
    {
      uri: "https://arweave.net/lzLVRaKZm0aigAJvR5vvfH7jrzR-t57_Xl9ByamICzk",
      address: "9iBe7p3EUZSHAYJ8JRxjp1R1Y43J2Bs1s9De5As3Sz9U",
    },
    {
      uri: "https://arweave.net/jV10jcRDohmbjgFCPxs-T87d26RhkZXYroS6Z0cbd5w",
      address: "SpKG6RdqdCLXGN6ZFh54TYo2JK5yep2w8azK2JXDZth",
    },
    {
      uri: "https://arweave.net/r6AUvtEHR_FlOnQjLU-uBCipCkUDTQefqy94jSC1TLw",
      address: "DRLkVmydurebib7zEoyzpPS2TtcaE9MpEX6zGYzc1JDQ",
    },
    {
      uri: "https://arweave.net/UrnyTJF_-HeJPedRA7E3lRa0Q8F4b-XFGYbJT2jvLg4",
      address: "DSsxSSjc2XBeB3U5zPTwPoYLVHStbAKzRwhWeDomwrJc",
    },
    {
      uri: "https://arweave.net/wYkkAZ6JZyZ6QmZpjza0JVLNB9ZrprR5LsKriiPz8Bo",
      address: "92qY8ojV6xjHXJgDEMQHSdF6WVAddSCZvkhAP9zsZPbs",
    },
    {
      uri: "https://arweave.net/BkycbqeaL7G7N1M1yvBOm17stE5-EKuU5EbjsrXdhcY",
      address: "BQCo2iwfBhaFUUPR7zrcJ68vTA6boFXVmJ8o6jzRAXq6",
    },
    {
      uri: "https://arweave.net/9gdKZ1kLy4No2C0xYUutoXF6vmfWGw1x-R2TSYMFU1M",
      address: "7NUucsX3aqYQpdb6FxpPcEKAGX5znSJbzfVm6LwotghP",
    },
    {
      uri: "https://arweave.net/pwyHUZUIHlwer3VLZdjmwN8ume11hqewpfSvxmk5OZU",
      address: "9zgz4Ya8au9CKJVxpP9wZWfPoZav7uSQkiakAJPNo8Pw",
    },
    {
      uri: "https://arweave.net/iWXJnyjKLoSbunq0DEctWWvQwZw7ZuLWAS0AxdtDeD0",
      address: "Ct4S9JBfvsMbMdMak1dht87UpFYysGggHMyMCPhdNoGz",
    },
    {
      uri: "https://arweave.net/cRnJoBuv3Zjl9GWdJqusuk5dWODjIiBgR3HacIwLIwA",
      address: "GUFHGuC5888cznopKziVyaxPZ5E8qo2wGkLCRWWc916u",
    },
    {
      uri: "https://arweave.net/Z08_6txn3wyiQjH7xitudWda3vZNFRss3-MkO7sLxLY",
      address: "FtqzMKyY29VxeieazVH9wJEBx3ZxhuetDLPjjgryyuW4",
    },
    {
      uri: "https://arweave.net/uI2V43yGqgk67-yp3zWTIpXZ-5gMCBmg3jYOT0_Bd_Y",
      address: "4a1BwhvKhccfQzZjDorb81X3JgeBRgVXVs9vqW8Lq1Bq",
    },
    {
      uri: "https://arweave.net/TY1G_cgLvIru8suo9LxCS0C1fsgVZnwZoIJX84Lx7NI",
      address: "2dT4iGdPRnM1oCBdwsPwZMfZVHdtcHM9MWXVQJdcv8FG",
    },
    {
      uri: "https://arweave.net/nIu4iEIS7iQgqH-J3gD2rMdHM09LjMXGTuPb_8_09Ok",
      address: "4WFFYN1bWg2Zd6rctykGs78PbcbFMEqiNkUskVcgi7hJ",
    },
    {
      uri: "https://arweave.net/8CtTBcjk8nmLILtYZka5yIoLWIc1lvjxAcJpSGd7GuU",
      address: "44Kbo8eLLCS92kjD8jEqay4CNe376H9GQyktU6iH8vr5",
    },
    {
      uri: "https://arweave.net/oq_PpbSmEphDOJmhyJXJ3Jnlw5zXCDZku3SVPttElj4",
      address: "CB6da86GHe9zqti8JFd6zRE7YHRevB2B3jjc5EjX2D8t",
    },
    {
      uri: "https://arweave.net/aaSYf3YEWmochAYrOWyBNAnQ88HSNew5e9Glco8SWUA",
      address: "8UCgzciDrtZ1j2gfS6fGGhaF7ADfUwBcYST6kbVgR8UH",
    },
    {
      uri: "https://arweave.net/0Lr1qqsT_zn03VTeYMUFUytFcr8-hHILUSpr4AIcn0Q",
      address: "7KbzA3mNRWD1qxtSAMs3C5Z8nydKbDuWGsD5Q6via2rh",
    },
    {
      uri: "https://arweave.net/IkseOFVfvvYfvHxJe1n7XTPGmlFdDQ6k-H-0wsfwkac",
      address: "CRmKuFNZnXGXS1p6migMZM6Txc4rDBTNRJEdFUDUgdjX",
    },
    {
      uri: "https://arweave.net/bhqLfZl-LS4ib9b3IW5wuRzsjWRylUuvgcCHEEoyIbo",
      address: "9ryUgPAqaqCX7YcU2QxdP1hzLvVGinqZpaTRkDiVWNt",
    },
    {
      uri: "https://arweave.net/UfUR1UoyUvpsbrB3I2042fTkKYqgIP6tyPEyFomP4WU",
      address: "Bizd8GfsRJLMrmUDPouKpX9WPHT1eB2BnUYHcBdVQUbk",
    },
    {
      uri: "https://arweave.net/dpGHJkn6L4ShAYjYRzQSC7BrJegmc0IiFJSWXrshNrY",
      address: "2ZCcRoRpRNgu8HGt7PJTjmcYJCxeuDyc8zKVVAEoBBft",
    },
    {
      uri: "https://arweave.net/E7OiqTjh3nzGSlyTMbh-kO0kyMQ0ocTO6Bjc3BPJ6w0",
      address: "DHKBhLC8eZqRJ7YFF6YwAwvZLn8ERqhEpLLYQmA442ZW",
    },
    {
      uri: "https://arweave.net/zdTGMKB_RgOVc-WJy-gXAAPmVSZyTqNQidVAznB5zwQ",
      address: "5qN4ExwJHidedhqHuTiTKty1ijA1phfdNxe9CEE8eN8K",
    },
    {
      uri: "https://arweave.net/TRHU26q6okZsZKt-CGSHkbXe-jVzqBvdm-jexAlveE8",
      address: "5nDzR8mDHm5o18g25sFy4cwh4gzCXcATqyzWhnT1nYtw",
    },
    {
      uri: "https://arweave.net/T4izbH3es7tspub2pZ8iXVHR99S4YkoUAw7tMfvTZbs",
      address: "EqqGX1SwUF4CMrvs7vQFCpFq6aU6i8Yo4xo9HXayGA8H",
    },
    {
      uri: "https://arweave.net/KoxEL9M6njGo0SGryzeJUAFCSrpAiuvzR7uoYRiO2i4",
      address: "FsVCLp5xwyizofhKmNnGSKo1bhWYZPi5r88waL9Y2wPy",
    },
    {
      uri: "https://arweave.net/-DL4qDhk8e3T16oMF6UW4tAq-hgYi5vBOo8mNec-ZmA",
      address: "22xmAeAJemZEcJB4uJ5f6MmkuLUJNcM1EKQbJY3QKjsA",
    },
    {
      uri: "https://arweave.net/ywEnjQi5nB5Cy9EC6pXtcio5Qj9Ho9RvnHbF0erTCrc",
      address: "4utfcp3Pyyu7SfkpV9Ds5dBp6rHUoPKbJA4tpuYnkjSA",
    },
    {
      uri: "https://arweave.net/tAjFihRkVS2W3e0GQgxyfHfWf4z6ldgPY0HZVWrs2kY",
      address: "3JqwnF1LeH1635PbCKqpxFscD1rd5BLNsukyhXALry99",
    },
    {
      uri: "https://arweave.net/MwNkbCXZ_NqDModWITG8ql6CyeQUiBVCM0D2zHvzB5k",
      address: "4CJihcUmLHW5PcNunQNmcVHQzb31jz7V65hejo34AEsV",
    },
    {
      uri: "https://arweave.net/G_Qgu99KfOC78laeSmJx7mvMMqpAF8s6rcRfHbUivjY",
      address: "DTuvgFHFGb2YnQ3sAbzdkPStGRd7bVScpweNusiaesd5",
    },
    {
      uri: "https://arweave.net/-2oPa-EoM9v-3477M6ZiFBqg1QJksLBLBnLKsk26Uq8",
      address: "4i5r8oyLxfcMn1dwj79kAMvHbhdgqKtXQhCTdri651xM",
    },
    {
      uri: "https://arweave.net/Svw3LamGOyFQ23tln4Rf1UoADTXOONvzfj9BVJIQzQI",
      address: "49H1hkViD6BEmcDJfD9eitDto6PoMFFkujn3Vsp8D39X",
    },
    {
      uri: "https://arweave.net/CKc2qXDhkbUrBcVALYPIQOob4MV9omN6yU1aR9bzzeo",
      address: "3iWZTrYJrJ8kKx4KT28NH3CPnMgcEGZHrqL7fri5r8jg",
    },
    {
      uri: "https://arweave.net/ZtspofaxG0jZWxKJ0Gz9mOobbPkMtAKtQn66bAPH4MY",
      address: "8fMyV6z7vSBKRegwsAN85mNv4fJPoqjCYQU2x7tN1Nc8",
    },
    {
      uri: "https://arweave.net/SDd-4PX_KSzTQDOV7v8ARaZZeYkFANa2GLSteIJkd5g",
      address: "DmzWhQmvi3tsZCaZJc4S1NMHPNdMqPi1w2fLenKSeJxH",
    },
    {
      uri: "https://arweave.net/e8a4--Zf0J7zJrNc98OQmayQXMyS2havqj33hYzDOY8",
      address: "FtQRbpjHM3RmauipPf3q5naTfwUpLaG9E7ajtFU47RBm",
    },
    {
      uri: "https://arweave.net/a3fZ5_Q94NDTqp8nEpilcQpwr172HtiZQq0-yAP4N24",
      address: "81x148oMbyEHyhDGjKXJfPbwN6m5idAL2Aq82nRNwc9c",
    },
    {
      uri: "https://arweave.net/FfN8ifhjOFaufuHDdwKuHMDLPfXWnBzLlb-YUDKgXOI",
      address: "DzXj3hcu9WyXopziBTeubKbxPBPdKx8VXHq6ycRwyxAT",
    },
    {
      uri: "https://arweave.net/XiO1pePSaHzw-Ybvkv48TyOks_UKvkdW4f2OJuXIJ0s",
      address: "G76ntfn8zWeJPwGmEEWh1t2wCy5oSQMMVTwFCXZRsgHv",
    },
    {
      uri: "https://arweave.net/myVGL6wiACaHRxcZt6DqkbRQ_m9VMJAiy2lV3LSpkSw",
      address: "5nDp22r5eQHSkA1NeJ8fg7CwE9WQ9Dh7cYKLJG9ouQYQ",
    },
    {
      uri: "https://arweave.net/t-rzW3sjyp672m-SzOGO9d8_Um1iNRmzvhSGuJiWxmE",
      address: "BZrtKawevBucLCy21rqApus2DoKBi8R9V7zUVkSWri3j",
    },
    {
      uri: "https://arweave.net/PdHdJrPrYVQ4ZqLaU1paRLGuTxzKPEA_Pej4yyZynKE",
      address: "eTp9giNmPKzaefESe7zo58cCdmvDCJ12a7FjBJDxkJ9",
    },
    {
      uri: "https://arweave.net/OukS8LwDFxidZ-PwbAf60zOjRUoY6JORCksHg17ROfM",
      address: "FprDtav1T4LKqAMEpbFXFMBTNVYPzWoYfWJ6kzBuVF5r",
    },
    {
      uri: "https://arweave.net/6EJOtLxILYb2Z4kOIPguMQYtn70L750mIQoXEBlVIJY",
      address: "D8SupX9rimnSHaNAUufZ7NAsSvp9GYBUqpYetz6szV3h",
    },
  ],
};
