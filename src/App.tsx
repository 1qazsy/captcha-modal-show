// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const AICaptchaRefTop = useRef(null);
  const [visb, setVisb] = useState(false);

  useEffect(() => {
    console.log("xxxx");
    const script = document.createElement("script");

    script.src =
      "https://www.zsy96115.top/captcha-sdk-js/build/captcha/captcha.js"; // 替换为你需要的 CDN 链接
    script.async = true;

    script.onload = () => {
      AICaptchaRefTop.current = new Captca({
        onSuccess: () => {},
        onClose: () => {},
        key: "self-position-default-show", // 必传
        // isNohide: false,
        //   isShowClose: false,
        domId: "self-position-default-show", // 自定义挂载元素，webView嵌入时传入无效
        confirmPosition: "bottom",
        language: "zh-CN",
        activeKeyObject: {
          accessKey: "accessKey",
          secretKey: "secretKey",
        },
        style: {
          // backgroundColor: "transparent",
          width: "100vw",
          maxWidth: "400px",
          height: "350px",
          // color: "#000",
          top: "0px",
          borderRadius: "5px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          right: "20px",
        },
      });
    };

    document.head.appendChild(script);

    return () => {
      // AICaptchaRefTop.current.vecaiCaptca.destroy();
      // document.head.removeChild(script);
      // AICaptchaRefTop.current = null;
    };
  }, []);

  return (
    <div>
      {!visb ? (
        <button
          onClick={() => {
            AICaptchaRefTop.current.vecaiCaptca.show();
            setVisb(true);
          }}
        >
          Click Me
        </button>
      ) : (
        ""
      )}
      <div id="self-position-default-show"></div>
    </div>
  );
}

export default App;
