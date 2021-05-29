import React, { useState } from "react";
import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Unity from "react-unity-webgl";

const LoaderBox = styled(Box)`
    position: absolute;
    top: 50%;
`;
const LoaderText = styled.p`
    font-size: 10px;
`;

export default function UnityGame({ context, height, width }) {
    const [progress, setProgress] = useState(0);
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
                <LoaderBox display="inline-flex">
                    <CircularProgress variant="determinate" value={progress * 100} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <LoaderText>{Math.round(progress * 100)}%</LoaderText>
                    </Box>
                </LoaderBox>}
            <Unity
                unityContext={context}
                style={{
                    height: height,
                    width: width
                }} />
        </>
    )
}