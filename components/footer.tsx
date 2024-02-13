import ContactSection from "./contact";

export default function Footer() {
  return (
    <footer className="overflow-hidden relative">
      <div className="h-[35vh] bg-gradient-to-b from-bg1 to-bg2 relative">
        <ContactSection />
        <div className="absolute -bottom-0 right-0 translate-x-1/2 -rotate-[18deg] w-[200vw] h-72 overflow-hidden border-t-2 bg-bg2 border-bg2"></div>
        <h2 className="absolute bottom-10 right-10 text-6xl font-thin">
          eric xiao
        </h2>
      </div>
      {/* <div className="absolute -bottom-0 right-0 translate-x-1/2 -rotate-[18deg] w-[200vw] h-72 bg-white overflow-hidden mix-blend-difference"></div> */}
    </footer>
  );
}