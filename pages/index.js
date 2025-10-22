import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    <script SameSite="None; Secure" type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
<div id="myLandbot" style="width: 100%; height: px"></div>
<script type="module">
  var myLandbot = new Landbot.Container({
    container: '#myLandbot',
    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3192567-0J79WIUZTS6I14S7/index.json',
  });
</script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
