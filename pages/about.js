import Link from "next/link"

export default function AboutPage() {
  return (
    <>
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About</h1>
          <p className="mb-5">
          Comic Strips can be fun and creative. This tool aims to support a 7-12 year old's creativity and to explore AI generated comic strips. 
          </p>
          <p>
            Example of AI generated comic strip generated with Azure AI on instagram &nbsp;
          </p>
          <Link href="https://www.instagram.com/p/C-2L7K0qpcY/">
            <button className="btn btn-primary">View example AI Comic</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
