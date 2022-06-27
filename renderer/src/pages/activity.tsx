import ActivityView from "@/views/activityView";
import { getAccountTransactions } from "@/web3/solscan/api";
import React, { useState } from "react";
import { useQuery } from "react-query";

import NavigationStore from "@/store/NavigationStore";

function Activity() {
  NavigationStore.active("Activity");

  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
  const { data: transactionsData } = useQuery(
    ["getAccountTransactions", { address }],
    getAccountTransactions,
    { enabled: !!address }
  );

  let [token_categories] = useState({
    Received: [
      {
        id: 1,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 2,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 3,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 4,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 5,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
    ],
    Sent: [
      {
        id: 1,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 2,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 3,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 4,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 5,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
    ],
    Deposit: [
      {
        id: 1,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 2,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 3,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 4,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
      {
        id: 5,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
      },
    ],
  });

  let [nft_categories] = useState({
    Completed: [
      {
        id: 1,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 2,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 3,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 4,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 5,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
    ],
    Pending: [
      {
        id: 1,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 2,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 3,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 4,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 5,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
    ],
    Cancelled: [
      {
        id: 1,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 2,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 3,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 4,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
      {
        id: 5,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: "/images/nfts/1.png",
      },
    ],
  });

  return (
    <React.Fragment>
      <div className="mx-3 mb-3 rounded-xl bg-[#121212]">
        <div className="container mx-auto min-h-[90vh]">
          {/* Main Area */}
          <ActivityView
            nft_categories={nft_categories}
            token_categories={token_categories}
            transactionsData={transactionsData}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Activity;
