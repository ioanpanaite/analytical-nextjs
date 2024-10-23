import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, lang: ctx.query.lng };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <title>Analytic Coaching</title>
        <Head>
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          <link rel='apple-touch-icon' sizes='180x180' href='/ac.svg' />
          <link rel='shortcut icon' href='/ac.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;