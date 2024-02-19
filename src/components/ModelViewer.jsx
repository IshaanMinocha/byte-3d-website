import React, { Suspense, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewerTwo = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

const Model = () => {
  return (
    <group>
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
    <group position={[0, 0, 0]}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={[0.75, 0.75, 0.5]} // Increase the size of the model on hover
        // Add transition effect
      >
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
};

export default ModelViewerTwo;