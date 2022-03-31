import { useState } from "react";
import "../styles/globals.css";
import "../styles/Landing.module.css";
import ContentsContext from "../contexts/ContentsContext";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "../components/Variables";
function MyApp({ Component, pageProps }) {
  const [name, setName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [title, setTitle] = useState("");
  const [memberId, setMemberId] = useState("");
  const [type, setType] = useState("");
  const [music, setMusic] = useState(false);
  return (
    <ContentsContext.Provider
      value={{
        name,
        setName,
        memberId,
        setMemberId,
        type,
        setType,
        music,
        setMusic,
      }}
    >
      <Component {...pageProps} />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </ContentsContext.Provider>
  );
}

export default MyApp;
