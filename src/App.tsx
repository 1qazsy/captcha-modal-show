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
      "https://www.zsy96115.top/captcha-sdk-js/build/captcha/captcha.js"; // 加载 CDN 链接
    script.async = true;

    script.onload = () => {
      AICaptchaRefTop.current = new Captca({
        onSuccess: () => {
          setVisb(false);
        },
        onClose: () => {
          setVisb(false);
        },
        key: "self-position-default-show", // 必传
        isNohide: false,
        //   isShowClose: false,
        domId: "self-position-default-show", // 自定义挂载元素，webView嵌入时传入无效
        confirmPosition: "right",
        language: "zh-CN",
        activeKeyObject: {
          accessKey: "accessKey",
          secretKey: "secretKey",
        },
        position: "center", //纵向位置: top、 center、 bottom  默认top
        domId: "self-position-default-show", // 自定义挂载元素，webView嵌入时传入无效
        style: {
          backgroundColor: "rgba(153, 153, 153,.5)",
          width: "calc(100vw - 20px)",
          maxWidth: "400px",
          height: "calc(30vh)",
          maxHeight: "400px",
          color: "#000",
          // top: '10px',
          borderRadius: "5px",
          // position:'absolute',
          // left: '50%',
          // transform: 'translateX(-50%)',
        },
      });
    };

    document.head.appendChild(script);

    return () => {
      AICaptchaRefTop.current.vecaiCaptca.destroy();
      document.head.removeChild(script);
      AICaptchaRefTop.current = null;
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
