/* node module imports */
import React, {useState, useEffect, memo} from "react";
import {isIE} from "react-device-detect";

/* app imports */
import "./style.scss";

/* the component */
const BackgroundVideoComponent = (props) => {
  let [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    if (!("mp4" in props) || typeof props.mp4 !== "string") {
      setVideoSource(() => null);
    }
    else if (!("webm" in props) || typeof props.webm !== "string") {
      setVideoSource(() => null);
    }
    else {
      const formats = {
        mp4: 'video/mp4; codecs="avc1.42E01E"',
        webm: 'video/webm; codecs="vp8, vorbis"'
      };
      const v = document.createElement("video");
      const mp4Status = v.canPlayType(formats["mp4"]) === "probably" ? true : false;
      const webmStatus = v.canPlayType(formats["webm"]) === "probably" ? true : false;

      if (isIE) {
        setVideoSource(() => null);
      }
      else if (mp4Status) {
        setVideoSource(() => props.mp4);
      }
      else if (webmStatus) {
        setVideoSource(() => props.webm);
      }
      else {
        setVideoSource(() => null);
      }
    }
  }, [props.mp4, props.webm]);

  if (!videoSource) {
    return null;
  }
  else {
    return (
      <React.Fragment>
        <div className="videoParent">
          <video autoPlay loop muted playsInline src={videoSource}></video>
        </div>
      </React.Fragment>
    );
  }
};
export const ReactHTML5BackgroundVideo = memo(BackgroundVideoComponent);
