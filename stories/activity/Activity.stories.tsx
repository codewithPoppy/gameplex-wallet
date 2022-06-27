import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActivityView from "../../renderer/src/views/activityView";
import nft from "../assets/images/nfts/11.png";

export default {
  title: "Page/Activity",
  component: ActivityView,
} as ComponentMeta<typeof ActivityView>;

const Template: ComponentStory<typeof ActivityView> = (args) => (
  <ActivityView {...args} />
);

export const ActivityPage = Template.bind({});
ActivityPage.args = {
  token_categories: {
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
  },
  nft_categories: {
    Completed: [
      {
        id: 1,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 2,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 3,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 4,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 5,
        amount: "Received 2 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
    ],
    Pending: [
      {
        id: 1,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 2,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 3,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 4,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 5,
        amount: "Sent 2.5 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
    ],
    Cancelled: [
      {
        id: 1,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 2,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 3,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 4,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
      {
        id: 5,
        amount: "Added 1 SOL",
        from: "HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW",
        date: "5h ago",
        icon: nft,
      },
    ],
  },
  transactionsData: {
    succcess: true,
    data: [
      {
        blockTime: 1656103293,
        slot: 138869264,
        txHash:
          "DhXejdq5FqppLvf8x81VJ72toe1VsJYsPWbSee6Z2cK4vAuy9mz6qiH6GUEkEmw8XozHpAxM5uB3nwZNAcJr5r8",
        fee: 5000,
        status: "Success",
        lamport: 0,
        signer: ["H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf"],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656103107,
        slot: 138869026,
        txHash:
          "36a6QwDpYf6ZK6jUCdYZQ8TkQfmxCDzcmUAyUDNDCNhG6d5JWH12umee87PY2W3TMTWYHE2xgFQqLNLpzJAZ6FDn",
        fee: 10000,
        status: "Success",
        lamport: 0,
        signer: [
          "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
          "NTYeYJ1wr4bpM5xo6zx5En44SvJFAd35zTxxNoERYqd",
        ],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656070851,
        slot: 138822306,
        txHash:
          "jAtFYp4yKQuvW4T2riUHEoT8k3FnBVL8UT7dKidr4BbrwGYCspYndtxoR7LdbrdczBY9ay2H8oYqsWe7xATdjC1",
        fee: 10000,
        status: "Success",
        lamport: 0,
        signer: [
          "3MRwsfqo8H7ihfBqLZiskECHFnM8ot2r1cA29aXH7X3D",
          "NTYeYJ1wr4bpM5xo6zx5En44SvJFAd35zTxxNoERYqd",
        ],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656034901,
        slot: 138768593,
        txHash:
          "vTYyfSex2t8EwkSjrEFSFrBjqFo6byfXkrPusMiESb72vZhWhCKMZUQizx7c1xKkiWVZvwnM25ipvdCCquTKQQh",
        fee: 5000,
        status: "Success",
        lamport: 0,
        signer: ["H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf"],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656027430,
        slot: 138757383,
        txHash:
          "3kfRSSPyVx1HVGMgWH5uCxSzADyAnULki8JudZ6GZSgHj9e5zgaLVeHGxQfBKVjg78FZ9Pux677zBz9XLvc9MQVm",
        fee: 5000,
        status: "Success",
        lamport: 0,
        signer: ["gFPqDmKFdAiN9BSpALk16r36yjkGXGZV5ScoY5ViLkM"],
        parsedInstruction: [
          {
            programId: "1RzgwLNLcLXCnK6eiev5jPmEP6TyJbmkTtvN6NShvXy",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656016731,
        slot: 138741346,
        txHash:
          "5sksW7ZEFtfGUyRrKgFpyAmmCfCGgfn6xGF7pDKZayHJRwi47JdXBkbwqhnQT9dpRTvyFDfC86hiMhvhxk9DLsv3",
        fee: 10000,
        status: "Success",
        lamport: 0,
        signer: [
          "XUoGzMgd24UAwx1rSRAao93F6vxNitK7FWpSQPoftoC",
          "NTYeYJ1wr4bpM5xo6zx5En44SvJFAd35zTxxNoERYqd",
        ],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656015299,
        slot: 138739269,
        txHash:
          "2mX46U5QPZ3CBYL6sfnsW4n8faE5fG9ZHk8MAgKwr41DHvss3rh8GyWaTAoZZkV4A4iy6epXmHGwPTrJj3Kads3T",
        fee: 5000,
        status: "Success",
        lamport: 0,
        signer: ["H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf"],
        parsedInstruction: [
          {
            programId: "11111111111111111111111111111111",
            program: "system",
            type: "sol-transfer",
          },
        ],
      },
      {
        blockTime: 1656008331,
        slot: 138729487,
        txHash:
          "3NqEuJQcWsBK44foPD66vE9NewPYwxA5fW1ayBJHieHbFM1t9MDS4AKTbbcVoPmiDjo5cC8qszasVsCtC4WjSszt",
        fee: 10000,
        status: "Success",
        lamport: 0,
        signer: [
          "3k47kMFD3k3a8jUu2RohfAC4i8UPcQZ13EcBQZSmcaRR",
          "NTYeYJ1wr4bpM5xo6zx5En44SvJFAd35zTxxNoERYqd",
        ],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
      {
        blockTime: 1656007232,
        slot: 138728025,
        txHash:
          "51RZWaHDGvP1WpMN9vBfUSxvEQJY9XapTqWNWiSNj5LZQoCbuQXzY5Tw95ZHFSYxhi6ojPgTiZQgsnNbLqmSFHG",
        fee: 5000,
        status: "Success",
        lamport: 0,
        signer: ["E3qhG9acVZzwZGuz8maq8FPdhpJwaqMaQug8ENiymN5n"],
        includeSPLTransfer: true,
        parsedInstruction: [
          {
            programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
            program: "spl-associated-token-account",
            type: "createAssociatedAccount",
          },
          {
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            program: "spl-token",
            type: "spl-transfer",
          },
        ],
      },
      {
        blockTime: 1656005369,
        slot: 138725330,
        txHash:
          "3nTxZReb3QXACnv3gaeu3kcGvd57yPN1bSHmk3GBN3ftBfxsGWfSRNHYKxftziqSWky4oXxuho8huh5svgn36Kvr",
        fee: 10000,
        status: "Success",
        lamport: 0,
        signer: [
          "4ZfZ5o21vFZfpqz42gwXxQ2YP18Xz2NCnVyxS6r1TNSL",
          "NTYeYJ1wr4bpM5xo6zx5En44SvJFAd35zTxxNoERYqd",
        ],
        parsedInstruction: [
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
          {
            programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            type: "Unknown",
          },
        ],
      },
    ],
  },
};
