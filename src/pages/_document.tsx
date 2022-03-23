import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="aka's blog" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
