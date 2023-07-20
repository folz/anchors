import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A library to position floating elements in robust and configurable ways."
          />
        </Head>
        <body
          className="bg-gray-75 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
          data-remove-transitions=""
        >
          <div id="focus-root" tabIndex={-1} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
