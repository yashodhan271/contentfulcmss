import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/base.scss";
import Header from "@/components/organisms/Header/Header";
import { fetchEntries } from "@/utils/contentful";
import styles from "@/styles/layout.module.scss";
import { LivePreviewProvider } from "../providers/ContentfulLivePreview";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { Footer } from "@/components/organisms/Footer/Footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Coherent Digital",
  description: "Coherent Digital",
};


const getHeaderData = async () => {
  const entries = await fetchEntries({ content_type: 'siteFurniture', include: 5 }, false);
  return entries;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await getHeaderData();
  const { headerLogo, headerCommonLogo, pricingTitle, signInTitle, portalUrl, navigationMenu, cta, footerLogo, facebookIcon, facebookUrl, youtubeIcon, youtubeUrl, linkedInIcon, linkedInUrl, footerLinks, copyright } = data[0]?.fields;
  const { isEnabled } = draftMode();
 

  return (
    <html lang="en">
      <Script src="https://cdn-cookieyes.com/client_data/26d4a943301bb0e351b042c0/script.js" />
      <body className={inter.className}>
        <LivePreviewProvider isEnabled={isEnabled}>
          <Suspense>
            <Header headerLogo={headerLogo.fields.file.url} headerCommonLogo={headerCommonLogo.fields.file.url} pricingTitle={pricingTitle} signInTitle={signInTitle} portalUrl={portalUrl} menu={navigationMenu.fields.navigationLinks} cta={cta} />
            <div className={styles.siteWrapper} data-test-id="wrapper">
              {children}
            </div>
            <Footer logo={footerLogo?.fields?.file?.url} linkedInIcon={linkedInIcon?.fields?.file?.url} facebookIcon={facebookIcon?.fields?.file?.url} facebookUrl={facebookUrl} youtubeIcon={youtubeIcon?.fields?.file?.url} youtubeUrl={youtubeUrl} linkedInUrl={linkedInUrl} menu={navigationMenu?.fields.navigationLinks} links={footerLinks} copyright={copyright} />
          </Suspense>
        </LivePreviewProvider>
      </body>
      <GoogleAnalytics gaId="G-RV49JKNXSW" />
    </html>
  );
}
