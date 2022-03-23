import { useState } from "react";
import "../styles/globals.css";
import "../styles/Landing.module.css";
import ContentsContext from "../contexts/ContentsContext";

function MyApp({ Component, pageProps }) {
  const [textValid, setTextValid] = useState(false);
  const [memberId, setMemberId] = useState("");
  return (
    <ContentsContext.Provider
      value={{ textValid, setTextValid, memberId, setMemberId }}
    >
      <Component {...pageProps} />
    </ContentsContext.Provider>
  );
}

export default MyApp;
