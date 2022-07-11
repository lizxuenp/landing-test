import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&display=swap" rel="stylesheet" />
            </Head>
            <body className='bg-white-liz dark:bg-black-liz'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}