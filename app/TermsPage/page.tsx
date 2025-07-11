import TermsOfService from "@/app/components/TermsOfService";
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Mint Mogul</title>
        <meta
          name="description"
          content="Read the Terms of Service for Mint Mogul. Learn about usage, affiliate disclosure, and your rights."
        />
      </Head>
      <TermsOfService />
    </>
  );
}
