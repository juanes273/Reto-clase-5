import React, { useRef } from "react";
import { useGLTF,meshBounds, useTexture } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export default function Banana(props) {
    const gato =useTexture("/static/gato.jpg")
    const gato1 =useTexture("/static/gato1.jpg")
    const bananaRef = useRef(null)
    const [imagen, setImagen] = useState(false)
    const onHandleBanana = (event) => {
        if(imagen){
            bananaRef.current.children[0].children[0].material.map = gato
        }else{
            bananaRef.current.children[0].children[0].material.map = gato1
        }
        
    }

    return (
        <group ref={bananaRef} {...props} dispose={null} onPointerMove={onHandleBanana}>
            <mesh receiveShadow={true} scale={10} raycast={meshBounds} onPointerMove={(e)=>{setImagen(!imagen)}}>
                <mesh>
                    <planeGeometry/>
                    <meshBasicMaterial map={gato}  />
                </mesh>
            </mesh>
        </group>
    );
}

useGLTF.preload("/static/banana.glb");