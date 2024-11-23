
// The page shows UI unique to the route. This particular route is the root of the website.
// A page is defined by exporting a component from a page.tsx file.
export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 items-center">
        <p className="font-bold text-4xl text-peach">hi, i&apos;m</p>
        <h1 className="font-bold text-9xl font-[family-name:var(--font-big-shoulders-inline-text)] text-center">kirsten phillips</h1>
        <div className="relative flex flex-col items-center w-full mt-4">
          <div className="relative rounded-md bg-[var(--light-mauve)] py-16 w-2/3 h-full"></div>
          <p className="font-bold absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-[var(--dusty-blue)] text-center w-full px-9">a software engineer working to create simple yet powerful products to make life easier</p>
        </div>
      </main>
    </div>
  );
}
