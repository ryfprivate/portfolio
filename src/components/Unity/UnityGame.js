import React, { useState } from "react";
// Styling
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';

import Unity from "react-unity-webgl";

const LoaderBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${props => props.height ? props.height : '100vh'};
    width: ${props => props.width ? props.width : '100vw'};
    background: black;
`
const Loader = styled(LinearProgress)`
    && {
        height: 20px;
        width: 500px;
    }
`

export default function UnityGame(props) {
    const { context, height, width } = props;
    const [progress, setProgress] = useState(50);
    const [loaded, setLoaded] = useState(false);

    context.on("loaded", () => {
        setLoaded(true);
    });

    context.on("progress", (progress) => {
        setProgress(progress);
    });

    return (
        <>
            {loaded ?
                "" :
                <LoaderBackground
                    height={height}
                    width={width}
                >
                    <Loader variant="determinate" value={progress * 100} />
                </LoaderBackground>
            }
            <Unity
                unityContext={context}
                style={{
                    position: 'fixed',
                    height: height,
                    width: width
                }} />
        </>
    )
}