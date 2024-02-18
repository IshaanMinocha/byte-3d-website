import React, { Suspense, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  return (
    <div className=''>
    <Canvas style={{width: '100px', height: "100px"}}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </div>
  );
};

const Model = () => {
  return (
    <group position={[-5,0,0]}>
      <ambientLight intensity={0} position={[0, 0.5, 0]} color="green" />
      <pointLight intensity={100} position={[1, 1, 3]} />
      <ModelContent />
    </group>
  );
};

const ModelContent = () => {
  const [hovered, setHovered] = useState(false);
  const gltfUrl = 'bytelogo.glb'; // Replace 'path_to_your_model.glb' with the actual path to your GLB file

  const gltf = useLoader(GLTFLoader, gltfUrl);

  useFrame(() => { 
    gltf.scene.rotation.y += 0.01; // Rotate the model on the y-axis
  });

  return (

    <primitive
      object={gltf.scene}
      scale={hovered ? [1.25, 1.25, 1.25] : [1, 1, 1]} // Increase the size of the model on hover
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default ModelViewer;
