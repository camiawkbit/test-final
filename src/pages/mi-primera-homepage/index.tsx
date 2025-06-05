import Head from "next/head";
import { LandingHeroSection } from "@/components/LandingHeroSection";
import { LandingPageBody } from "@/components/LandingPageBody";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Mi primera homepage</title>
      </Head>
      <>
        <LandingHeroSection
          t1="Welcome to Our Product"
          t2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          t3="Learn More"
        />
        <LandingPageBody
          t1="Why choose us?"
          t2={<Image src="/400x400" width={400} height={400} alt="Feature 1" />}
          t3="Premium Quality"
          t4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          t5={<Image src="/400x400" width={400} height={400} alt="Feature 2" />}
          t6="Fast Delivery"
          t7="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          t8={<Image src="/400x400" width={400} height={400} alt="Feature 3" />}
          t9="Excellent Support"
          t10="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </>
    </>
  );
}
