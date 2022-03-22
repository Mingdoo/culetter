import "../styles/globals.css";
import "../styles/Landing.module.css";
import ContentsContext from "../contexts/ContentsContext";

function MyApp({ Component, pageProps }) {
  const [textLengh, setTextLength] = useState(0);
  return (
    <ContentsContext.Provider value={{ textLengh, setTextLength }}>
      <Component {...pageProps} />
    </ContentsContext.Provider>
  );
}

export default MyApp;
