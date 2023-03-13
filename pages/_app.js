// import '@/styles/globals.css'
import { Reset } from "styled-reset";
import "../public/static/fonts/style.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />;
    </>
  );
}
