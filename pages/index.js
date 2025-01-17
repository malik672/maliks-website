import Head from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="twitter:url" content="https://malik.com/" />
        <script
          defer
          data-domain="malik.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Nav active="Home" />
      <main className="mt-6 sm:mt-12 md:mt-16 flex flex-col text-white pl-12 md:pl-20">
        <section className="heading" aria-hidden="true">
          <div>
            Aremu Malik<div className="inline opacity-50">.</div>
          </div>
        </section>
        <section className="mt-8 md:mt-16 w-2/3 lg:w-1/2 md:text-xl">
          Hey! I'm Malik, loves blockchain, star wars, fantasy novels and Brandon Sanderson; thanks for stopping by! I'm fascinated about computer science and mathematics (& hope to also branch into some creative writing).{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://github.com/malik672"
          >
            Check out my GitHub
          </a>. If you ever see me, I'll probably either be talking about{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://starwars.fandom.com/wiki/Main_Page"
          >
            Star wars or quoting Yoda
          </a>
          , <span style={{ fontStyle: "italic", fontSize: "17px", textDecoration: "underline" }}>Do, or do not. There is no try - Yoda.</span>{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://open.spotify.com/playlist/3zctAx5qGonJV8S3AR29jy"
          >
            Music fan?, then you've to recognize Kendrick and The Weeknd supremacy.
          </a>
          {" "}Sometimes (most times tbh) I rant about{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://bookshelf.website/malik"
          >
            books
          </a>
          , obsess over CS, maths{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            //href="desimonelab.org/"
          >
            and blockchains.
          </a>{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            //href="https://jasanofflab.mit.edu/"
          >
            I hope to publish a research paper this year, learn more about zk, cryptography, form new connections, partake in more hackathons. Don't know how yet, but surely doing it.
          </a>
          , or just build more infra tools. I truly believe in e/acc, we've to progress at an exponential rate, that's the only way to save humanity!
          <br />
          <br />
          <span style={{ fontSize: "0.9rem", lineHeight: "0.7rem" }}>
            <span style={{ fontWeight: "bold" }}>Currently reading</span>:{" "}
            <span style={{ fontStyle: "italic" }}>
              Linear Algebra done right
            </span>{" "}
            by Sheldon Alexar.
          </span>
          <br />
          <br />
          <span style={{ fontSize: "0.9rem", lineHeight: "0.7rem" }}>
            Excited to learn more about my journey? Explore my{" "}
            <a
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
              href="#portfolio-section"
            >
              portfolio
            </a>{" "}
            or connect with me on{" "}
            <a
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
              href="https://twitter.com/MalikAremu1"
            >
              Twitter
            </a>{" "}
            and{" "}
            <a
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
              href="https://github.com/malik672"
            >
              GitHub
            </a>
            !
          </span>
        </section>
        <section className="mt-8 md:mt-8 w-2/3 lg:w-1/2 md:text-xl">
          <div className="icon-bar">
            <a href="https://twitter.com/MalikAremu1">
              <svg
                fill="white"
                height="20px"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/malik672">
              <svg
                fill="white"
                height="20px"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/"
              >
                <title>Github</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            {/* ... (remaining social media icons) */}
          </div>
        </section>
        <section>
          {/* ... (remaining code) */}
        </section>
      </main>
      <footer className="text-white mt-8 md:mt-16 pl-12 md:pl-20 mb-5 flex flex-col space-y-4 text-xs sm:text-sm">
        <div id="footnotes" className="font-inter">
          ¹DFTBA: Don’t forget to be awesome!
          <br />
          ²I'm always happy to chat! You can find me by emailing me at
          aremumalik05 (at) gmail.com or any way you can find (linked above or
          otherwise).
        </div>
        <div className="font-gilroy uppercase opacity-40">
          Copyright {new Date().getFullYear()} Aremu Malik.
        </div>
      </footer>
    </div>
  );
}
