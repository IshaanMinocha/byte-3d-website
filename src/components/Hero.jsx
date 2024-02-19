import { ViewerApp, AssetManagerPlugin, GBufferPlugin, ProgressivePlugin, TonemapPlugin, SSRPlugin, SSAOPlugin, BloomPlugin, GammaCorrectionPlugin } from "webgi";
import React, { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from "./Card";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();
    await manager.addFromPath("byte.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    camera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    let needsUpdate = true;

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    const memoizedScrollAnimation = (position, target, onUpdate) => {
      const tl = gsap.timeline();
      tl.from(position, {
        x: -0.0000000128,
        y: 10.00,
        z: 0.00001,
        scrollTrigger: {
          trigger: ".sound-section",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
        onUpdate,
      }).to(
        target,
        {
          x: -0.0000000019,
          y: 1.4902336001,
          z: 0.0000014923,
          scrollTrigger: {
            trigger: ".sound-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          onUpdate,
        })
        .to(
          target,
          {
            x: -0.0000000568,
            y: -10.00,
            z: -0.0000099998,
            scrollTrigger: {
              trigger: ".test-section",
              start: "top bottom",
              end: "top top",
              scrub: 2,
              immediateRender: false,
            },
            onUpdate,
          })
    };

    memoizedScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-[url(bg.jpg)] bg-no-repeat bg-fixed bg-blend-multiply bg-gray-900 bg-opacity-90">
        {/* <canvas className="w-screen h-screen fixed top-0 left-0" ref={canvasRef} /> */}
        <div className="hidden sm:block">

        <Card />
        </div>
        <div className="sm:hidden rounded-md px-2 py-20 text-center hover:animate-pulse text-7xl font-mono"> B.Y.T.E</div>
        <h1 className="font-heading text-3xl text-center text-green-500 capitalize mb-20  bg-">Solving problems one byte at a time</h1>
        <div className="w-screen flex justify-center gap-10 sm:text-xl px-5">
          <Link to='/tasks'>
            <button className="px-6 py-2 font-semibold bg-purple text-light w-fit transition-all shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] hover:text-dark active:translate-y-[3px] ">
              Selection Challenges
            </button>
          </Link>
          <Link to='https://github.com/bytemait'>
            <button className="px-6 py-2 font-semibold bg-purple text-light w-fit transition-all shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] hover:text-dark active:translate-y-[3px] ">
              Our Projects
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero