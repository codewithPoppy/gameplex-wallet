import get from "lodash.get";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTokens } from "../web3/solscan/api";
import { randomIntFromInterval } from "@/utils/numberUtils";
import { useMetadata } from "@/web3/hooks/useMetadata";
import { connection, publicKey } from "@/web3/config";
import { Metadata } from "@/web3/schema/metadata";


/**
 * const {cachedUri, isLoading} = useMetaImage(i.data.uri)
 * const {cachedData} = useMetaDetails(i.data.uri)
 * @param i : Metadata
 * @returns 
 *     collectionName: i.data.name,
 *     collectionImage: cachedUri,
 *     collectionDescription: i.data.description,
 *     collectionDetails: cachedData,
 *     collectionId: i.data.id,
 *     collectionIsLoading: isLoading,
 */
const collectionMap = (i: Metadata) => {
    return ({
      name:i.data.name,
      uri: i.data.uri,
      address: i.mint
    })
  };

const useHomePage = () => {
  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
  const [assets, setAssets] = useState([]);
  const [metadataList, fetchMetadata] = useMetadata();
  const [collections, setCollections] = useState([]);
  const { data: tokensData } = useQuery(
    ["getTransfers", { address }],
    getTokens,
    { enabled: !!address }
  );

  useEffect(() => {
    fetchMetadata({
      connection,
      ownerAddress: publicKey.toBase58(),
    });
  }, []);
  useEffect(() => {
    if (!metadataList || !metadataList.length) return;
    setCollections(metadataList.map(collectionMap));
  }, [metadataList]);

  useEffect(() => {
    setAssets(
      get(tokensData, "data", [])
        .filter(
          (t) =>
            get(t, "tokenIcon", false) &&
            get(t, "tokenName", false) &&
            get(t, "tokenSymbol", false)
        )
        .map((token, i) => ({
          assetImage: get(token, "tokenIcon", ""),
          assetAddress: get(token, "tokenAddress", ""),
          assetName: get(token, "tokenName", ""),
          assetSymbol: get(token, "tokenSymbol", ""),
          assetAmount: get(token, "tokenAmount.uiAmount", 0),
          assetAmountInUSD: randomIntFromInterval(1000, 10000),
          assetPercentChange: randomIntFromInterval(-100, 100),
        }))
    );
  }, [tokensData]);

  return { assets, collections } as const;
};

export default useHomePage;
