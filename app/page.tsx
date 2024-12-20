
// The page shows UI unique to the route. This particular route is the root of the website.
// A page is defined by exporting a component from a page.tsx file.
export default function Home() {
  return (
    <div className="grid items-center justify-items-center flex-auto w-full fade-up mt-[4rem]">
      <main className="flex flex-col gap-2 sm:gap-4 items-center">
        <p className="font-bold text-2xl sm:text-4xl text-peach">hi, i&apos;m</p>
        <h1 className="font-bold text-7xl sm:text-9xl text-center">kirsten phillips</h1>
        <p className="w-11/12 sm:w-3/5 text-l sm:text-2xl text-[var(--sage)] text-center my-6 faded-bg intro">i&apos;m a full-stack software engineer working to grow my skill set, with an eagerness to build high-quality software products to support critical missions </p>
      </main>
    </div>
  );
}
