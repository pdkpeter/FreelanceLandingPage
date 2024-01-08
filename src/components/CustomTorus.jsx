import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RenderTexture, Torus, Text } from '@react-three/drei';
import { RenderTarget, TorusKnotGeometry } from 'three';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const CustomTorus = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={15}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={3} />
        <mesh>
          <torusKnotGeometry args={[1, 0.25, 100, 100]} />
          <meshStandardMaterial color='#da4ea2'></meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
};

export default CustomTorus;
