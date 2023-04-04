import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="my-app">
      <Component {...pageProps} />
    </div>
  );
}
