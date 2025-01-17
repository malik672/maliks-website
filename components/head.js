import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Aremu Malik";
    const description = "Computer Scientist.";
    const keywords = "Aremu Malik, mathematics, computer science, blockchain, e/acc";
    const author = "Aremu Malik";
    const twitter = "@MalikAremu1";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Aremu Malik" />
            <meta property="og:url" content="bookworm.design" /> {/* This is where you put the domain */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Aremu Malik's personal website"/>
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {children}
        </Head>
    )
}