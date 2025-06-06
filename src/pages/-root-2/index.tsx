import Head from "next/head";
import { Basic } from "@/components/Basic";
import { tailblocksblock2 } from "@/components/tailblocksblock2";
export default function Page() {
  return (
    <>
      <Head>
        <title> Root 2</title>
      </Head>
      <>
        <tailblocksblock2 t1="Block2" />
        <Basic t1="Basic block" />
      </>
    </>
  );
}
