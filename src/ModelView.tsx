import "@google/model-viewer/lib/model-viewer";

const glbSrc = "./armored-knight.glb";

const ModelView = () => {
  return (
    <div>
      <h2>Model view component</h2>
      <model-viewer
        id="first"
        src={glbSrc}
        // ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        // exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity="1"
        // ar
        // autoplay
        ar-modes="webxr scene-viewer quick-look"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
      >
        <div className="poster" slot="poster">
          <img className="pre-prompt" src="/glb/prompt.svg" />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelView;
