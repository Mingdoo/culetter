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
  const [mailype, setMailType] = useState("");
  const [styleUrl, setStyleUrl] = useState("");
  const [content, setContent] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [image, setImage] = useState("");
  const [contentPosition, setContentPosition] = useState("");
  const [stickers, setStickers] = useState({});
  const [fontOrder, setFontOrder] = useState("");
  const [fontType, setFontType] = useState("");
  const [fontColor, setFontColor] = useState("");

  return (
    <ContentsContext.Provider
      value={{
        name,
        setName,
        receiverName,
        setReceiverName,
        receiverEmail,
        setReceiverEmail,
        title,
        setTitle,
        mailype,
        setMailType,
        styleUrl,
        setStyleUrl,
        content,
        setContent,
        musicUrl,
        setMusicUrl,
        image,
        setImage,
        contentPosition,
        setContentPosition,
        stickers,
        setStickers,
        fontOrder,
        setFontOrder,
        fontType,
        setFontType,
        fontColor,
        setFontColor,
      }}
    >
      <Component {...pageProps} />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </ContentsContext.Provider>
  );
}

export default MyApp;
