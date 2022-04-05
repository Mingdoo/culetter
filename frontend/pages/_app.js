import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/Landing.module.css";
import LetterContext from "../contexts/LetterContext";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "../components/Variables";
import { KAKAO_KEY } from "../components/apis/config";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_KAKAO_KEY);
    // Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  }, []);
  const [name, setName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [title, setTitle] = useState("");
  const [mailType, setMailType] = useState("");
  const [styleUrl, setStyleUrl] = useState("");
  const [content, setContent] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [image, setImage] = useState("");
  const [contentPosition, setContentPosition] = useState("");
  const [stickersPos, setStickersPos] = useState({});
  const [fontOrder, setFontOrder] = useState("");
  const [fontType, setFontType] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [memberId, setMemberId] = useState("");
  const [mailId, setMailId] = useState("");
  const [bgcolor, setBgcolor] = useState(1);
  const [fontsize, setFontsize] = useState(20);
  const [isFontBold, setIsFontBold] = useState();
  const [underlineColor, setUnderlineColor] = useState(0);
  const [mailCode, setMailCode] = useState("");
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <LetterContext.Provider
        value={{
          name,
          setName,
          receiverName,
          setReceiverName,
          receiverEmail,
          setReceiverEmail,
          title,
          setTitle,
          mailType,
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
          fontOrder,
          setFontOrder,
          fontType,
          setFontType,
          fontColor,
          setFontColor,
          memberId,
          setMemberId,
          mailId,
          setMailId,
          stickersPos,
          setStickersPos,
          bgcolor,
          setBgcolor,
          fontsize,
          setFontsize,
          isFontBold,
          setIsFontBold,
          underlineColor,
          setUnderlineColor,
          mailCode,
          setMailCode,
        }}
      >
        <Component {...pageProps} />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </LetterContext.Provider>
    </>
  );
}

export default MyApp;
