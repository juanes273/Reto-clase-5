import React, { useRef, useState } from "react";
import { useGLTF, meshBounds, useVideoTexture } from "@react-three/drei";

export default function Wall(props) {
  const wallRef = useRef(null);
  const [play, setPlay] = useState(false)
  const video = useVideoTexture("/static/video.mp4", {
    start: play,
    loop: true,
    muted: false,
  });

  const cambiarEstado = (event) => {
    setPlay(!play)
  }

  return (
    <group ref={wallRef} {...props} dispose={null} onClick={cambiarEstado}>
      <mesh receiveShadow={true} scale={1} raycast={meshBounds} >
        <mesh scale={10}>
          <planeGeometry />
          <meshBasicMaterial map={video} toneMapped={false} />
        </mesh>
      </mesh>
    </group>
  );
}
