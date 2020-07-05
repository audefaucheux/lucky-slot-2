import Head from "next/head";

const googleAnalyticsScript = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-166946061-1"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'UA-166946061-1');`,
      }}
    />
  </>
);

const Header = () => {
  return (
    <Head>
      {process.env.NODE_ENV === "production" && googleAnalyticsScript()}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@700&family=Ribeye&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@0.4.0/dist/confetti.browser.min.js"></script>
    </Head>
  );
};

export default Header;
