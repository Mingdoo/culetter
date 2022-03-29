import { useState } from "react";
import "../styles/globals.css";
import "../styles/Landing.module.css";
import ContentsContext from "../contexts/ContentsContext";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "../components/Variables";
function MyApp({ Component, pageProps }) {
  const [textValid, setTextValid] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [musicSelected, setMusicSelected] = useState(false);
  const [type, setType] = useState("");
  return (
    <ContentsContext.Provider
      value={{
        textValid,
        setTextValid,
        memberId,
        setMemberId,
        musicSelected,
        setMusicSelected,
        type,
        setType,
      }}
    >
      <Component {...pageProps} />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </ContentsContext.Provider>
  );
}

export default MyApp;
