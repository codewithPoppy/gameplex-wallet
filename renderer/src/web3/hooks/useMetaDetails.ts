import { useEffect, useState } from "react";

const cachedDataMapping = new Map<string, Record<string, unknown>>();
export const useMetaDetails = (uri?: string) => {
  const [cachedData, setCachedData] = useState<Record<string, unknown> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!uri) {
      return;
    }

    const result = cachedDataMapping.get(uri);
    if (result) {
      setCachedData(result);
      return;
    }

    if (!isLoading) {
      (async () => {
        setIsLoading(true);
        let response: Response;
        try {
          response = await fetch(uri, { cache: "force-cache" });
        } catch {
          try {
            response = await fetch(uri, { cache: "reload" });
          } catch {
            setIsLoading(false);
            return;
          }
        }

        const json = await response.json();
        cachedDataMapping.set(uri, json);
        setCachedData(json);
        setIsLoading(false);
      })();
    }
  }, [uri, isLoading, setIsLoading]);

  return { cachedData, isLoading };
};
