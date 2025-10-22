import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Load Landbot's external module script */}
        <script
          SameSite="None; Secure"
          type="module"
          src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"
        ></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Landbot container */}
        <div
          id="myLandbot"
          style={{ width: '100%', height: '600px' }} // Adjust height as needed
        />

        {/* Inline script to initialize Landbot */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              var myLandbot = new Landbot.Container({
                container: '#myLandbot',
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3192567-0J79WIUZTS6I14S7/index.json'
              });
            `,
          }}
        />
      </main>

      <Footer />
    </div>
  )
}
