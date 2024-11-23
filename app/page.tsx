
// The page shows UI unique to the route. This particular route is the root of the website.
// A page is defined by exporting a component from a page.tsx file.
export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen w-full gap-16 px-4 py-24 md:py-4">
      <main className="flex flex-col gap-2 sm:gap-4 items-center">
        <p className="font-bold text-2xl sm:text-4xl text-peach">hi, i&apos;m</p>
        <h1 className="font-bold text-7xl sm:text-9xl text-center">kirsten phillips</h1>
        <p className="w-11/12 sm:w-3/5 font-bold text-xl sm:text-3xl text-[var(--dusty-blue)] text-center mt-6 faded-bg intro">a software engineer working to create simple yet powerful products to make life easier</p>
      </main>
    </div>
  );
}
