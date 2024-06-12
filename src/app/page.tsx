import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Mint with $DEGEN",
      action: "link",
      target: "https://headless-checkout-theta.vercel.app",
    },
    {
      label: "Learn How to Build your Own Checkout",
      action: "link",
      target:
        "https://blog.crossmint.com/how-to-build-an-nft-checkout-with-degen-token/?utm_source=rohit&utm_medium=warpcaste&utm_campaign=degen",
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/default.png`,
    aspectRatio: "1.91:1",
  },
});

export const metadata: Metadata = {
  title: "Mint an NFT on Base with $DEGEN",
  description: "Mint an NFT on Base with $DEGEN",
  openGraph: {
    title: "Mint an NFT on Base with $DEGEN",
    description: "Powered by Crossmint's Headless Checkout",
    images: [`${NEXT_PUBLIC_URL}/default.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Mint an NFT on Base with $DEGEN</h1>
    </>
  );
}
