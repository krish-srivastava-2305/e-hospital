import { Canvas } from "@react-three/fiber";
import Icosahedron from "./Icosahedron";
import { Environment, Lightformer } from "@react-three/drei";

const Intro = () => {
  return (
    <div className="h-[calc(500vh+6vw)] w-full absolute top-0 left-0 -z-10">
      <Canvas>
        <Icosahedron></Icosahedron>
        <group>
          <Environment
            background
            near={1}
            blur={0.5}
            far={1000}
            resolution={256}
            preset="warehouse"
          >
            <Lightformer
              color={"#D04848"}
              form={"circle"}
              intensity={2}
              scale={[10, 10, 1]}
              position={[0, 5, 5]}
              rotation-x={-Math.PI / 2}
            />
            <Lightformer
              color={"#12372A"}
              form="ring"
              intensity={4}
              scale={[10, 10, 1]}
              position={[2, 5, 9]}
            ></Lightformer>
            <Lightformer
              color={"#40A2E2"}
              form={"circle"}
              intensity={1}
              scale={[10, 10, 1]}
              position={[0, -9, -9]}
              rotation-x={-Math.PI / 2}
            />
          </Environment>
        </group>
        <directionalLight color={"#DCF2F1"}></directionalLight>
      </Canvas>
    </div>
  );
};

export default Intro;
