import LoadingMP4 from "@assets/videos/PageLoader.mp4";
import LoadingWEBM from "@assets/videos/PageLoader.webm";

const PageLoader = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#25293E]">
      <video muted playsInline preload="auto" loop autoPlay controls={false}>
        <source src={LoadingWEBM} />
        <source src={LoadingMP4} />
      </video>
    </section>
  );
};

export default PageLoader;
