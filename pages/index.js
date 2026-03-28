import Head from "next/head";
import Script from "next/script";
import Broadcast from "../components/broadcast/Broadcast";
import Footer from "../components/elements/Footer";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";
import { CrispBanner } from "../components/crisp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amit Solution Hub GPRM</title>
        <meta name="title" content="Amit Solution Hub GPRM" />
        <meta
          name="description"
          content="Premium GitHub Profile Generator by Amit Solution Hub. Create your perfect ReadMe with advanced features and pro styling."
        />
        <meta name="copyright" content="Amit Solution Hub" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gprm.itsvg.in" />
        <meta
          property="og:title"
          content="Amit Solution Hub GPRM : GitHub Profile Maker"
        />
        <meta
          property="og:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta property="og:image" content="https://gprm.itsvg.in/webimg.png" />
        <meta property="x:card" content="summary_large_image" />
        <meta property="x:url" content="https://gprm.itsvg.in" />
        <meta
          property="x:title"
          content="GPRM : GitHub Profile ReadMe Maker"
        />
        <meta
          property="x:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta
          property="x:image"
          content="https://gprm.itsvg.in/webimg.png"
        />
        <link rel="icon" href="/logo.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7377463303850503"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9FEXPTFC17"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9FEXPTFC17', { page_path: window.location.pathname });
            `,
        }}
      />
      <>
        <CrispBanner />
        <div className="overflow-x-hidden max-w-[100vw] px-4 md:px-6 lg:px-8 text-slate-200 min-h-screen">
          <Broadcast />
          <NavBar />
          <HomePage />
          <Footer />
        </div>
      </>
    </>
  );
}
