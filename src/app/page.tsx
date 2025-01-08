//import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 Intro */}
      <section className="w-full h-[80vh] sm:h-[70vh] flex items-center justify-center flex-col">
        <div className="p-8 text-center">
          <h2 className="text-6xl font-bold mb-4">
            All your recipe needs in one place
          </h2>
          <p className="text-xl text-white">
            Never struggle coming up with recipes for dinner anymore! Use AI to come up with countless delicious meals!
          </p>
        </div>
  
      <div className="flex gap-4 items-center flex-col sm:flex-row items-center justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/create"
        >
          Create Now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="#how-it-works"
        >
          How It Works
        </a>
      </div>
    </section>


      {/* Section 2 How It Works*/}
      <section 
        id="how-it-works"
        className="w-full h-[80vh] sm:h-[60vh] flex items-center justify-between bg-gray-100">
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-700">
            Simply input the ingredients in your fridge and watch magic happens as detailed instructions of a recipe generates.
          </p>
        </div>
      </section>

      {/* Horizontal 3 */}
      <section className="w-full h-[80vh] sm:h-[60vh] flex items-center justify-between bg-gray-300">
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-4">Placeholder Section</h2>
          <p className="text-lg text-gray-700">
            input text
          </p>
        </div>
      </section>
    </div>
  );
}
