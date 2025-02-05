import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="block w-full max-w-screen-xl px-4 py-3 mx-auto text-gray-100 shadow-md rounded-xl bg-gradient-to-tr from-green-800 to-gray-700">
      <div className="flex flex-wrap items-center justify-between text-gray-100 gap-y-4">
        <Link 
          href="/" 
          className="mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        >
          Task Management App
        </Link>
        <div className="relative flex w-full gap-2 md:w-max">
          <Link 
            href="/addTopic" 
            className="relative h-10 max-h-[40px] w-auto select-none rounded-full bg-cyan-500 text-gray-100 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            Add Task
          </Link>
        </div>
      </div>
    </nav>
  );
}
