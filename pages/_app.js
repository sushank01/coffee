import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <div>
     <Component {...pageProps} /> {""}
     <footer>
     <p>  Sushank </p>
     </footer>
     </div>
  );
  }
export default MyApp;
