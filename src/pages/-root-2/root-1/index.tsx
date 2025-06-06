import Head from "next/head";
import { tailblocksblock1 } from "@/components/tailblocksblock1";
export default function Page() {
  return (
    <>
      <Head>
        <title>Root 1</title>
      </Head>
      <tailblocksblock1 t1="Block1" />
    </>
  );
}
