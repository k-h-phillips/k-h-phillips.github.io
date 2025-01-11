
// The page shows UI unique to the route. This particular route is the root of the website.
export default function Home() {
  return (
    <main className="grow flex flex-col gap-4 items-center justify-center sm:p-[4rem] p-[1rem] slide-up">
      <p className="font-bold text-2xl sm:text-4xl text-[var(--peach)]">hi, i&apos;m</p>
      <h1 className="font-bold text-7xl sm:text-9xl text-center">kirsten phillips</h1>
      <p className="sm:w-3/5 w-11/12 sm:text-2xl text-l text-[var(--sage)] text-center my-6 faded-bg intro">
        i&apos;m a full-stack software engineer working to grow my skill set, with an eagerness to build high-quality software products to support critical missions
      </p>
    </main>
  );
}
