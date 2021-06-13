import React, { useEffect } from "react";
import { UnityContext } from "react-unity-webgl";

import UnityGame from "./UnityGame";

const unityContext = new UnityContext({
    loaderUrl: "Build/website/website.loader.js",
    dataUrl: "Build/website/website.data",
    frameworkUrl: "Build/website/website.framework.js",
    codeUrl: "Build/website/website.wasm",
});

export default function OceanView(props) {
    const { height, width } = props;
    return (
        <UnityGame
            context={unityContext}
            height={height}
            width={width}
        />
    );
}