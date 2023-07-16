import Head from 'next/head'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({ children, title, description, keywords, robots, revisit }) {

    const pageTitle = Array.isArray(title) ? title.join(' | ') : title;
    const pageKeyWords = Array.isArray(keywords) ? keywords.join(',') : keywords;

    return (
        <>
            <Head>
                <title>{` ${title ? ` | ${pageTitle}` : ''}`}</title>
                <meta property='og:title' content={` ${title ? ` | ${pageTitle}` : ''}`} />

                <link rel='canonical' href='' />
                <meta property='og:url' content='' />
                <meta property='og:site_name' content={` ${title ? ` | ${pageTitle}` : ''}`} />

                <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
                <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
                <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
                <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
                <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
                <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
                <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />

                <link rel='shortcut icon' type='image/x-icon' href='/favicon/favicon.ico' />

                <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />

                <meta property='og:image' content='/favicon/favicon-96x96.png' />
                <meta property='og:type' content='website' />

                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
                <meta name='theme-color' content='#ffffff' />

                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

                <meta name='author' content='Sebastián Morales' />
                <meta name='description' content={description} />
                <meta property='og:description' content={description} />
                <meta name='keywords' content={`${keywords ? `${pageKeyWords}` : ''}`} />

                <meta name='robots' content={robots} />
                <meta name='revisit-after' content={revisit} />
            </Head>
            {children}
        </>
    )
}