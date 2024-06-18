/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/D8HvMcCwHK2
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#ffefd5] shadow-sm dark:bg-[#ffb6c1]">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <HandIcon className="h-6 w-6" />
            <span className="font-semibold text-lg text-[#ff6b6b]">Luxe Handbags</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="font-medium hover:text-[#ffb6c1] dark:hover:text-[#ffefd5]"
              href="/newarrival">
              New Arrivals
            </Link>
            <Link
              className="font-medium hover:text-[#ffb6c1] dark:hover:text-[#ffefd5]"
              href="/collection">
              Classic Collection
            </Link>
            <Link
              className="font-medium hover:text-[#ffb6c1] dark:hover:text-[#ffefd5]"
              href="/aboutus">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5 text-[#ffb6c1]" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCartIcon className="h-5 w-5 text-[#ffb6c1]" />
              <span className="sr-only">Cart</span>
            </Button>
            <Link href="/login">
              <Button size="icon" variant="ghost">
              <UserIcon className="h-5 w-5 text-[#ffb6c1]" />
              <span className="sr-only">Account</span>
            </Button>
            </Link>
            
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#ffefd5] dark:bg-[#ffb6c1]">
          <div className="container grid md:grid-cols-2 gap-8 py-12 md:py-24">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#ff6b6b]">
                  Discover Our Latest Collection
                </h1>
                <p className="max-w-[600px] text-[#ffb6c1] md:text-xl dark:text-[#ffefd5]">
                  Elevate your style with our exquisite selection of luxury handbags, crafted with the finest materials
                  and attention to detail.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffb6c1] px-8 text-sm font-medium text-[#ffefd5] shadow transition-colors hover:bg-[#ffb6c1]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffb6c1] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#ffefd5] dark:text-[#ffb6c1] dark:hover:bg-[#ffefd5]/90 dark:focus-visible:ring-[#ffefd5]"
                  href="/collection">
                  Shop Now
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              height="600"
              src="/handbag1.png"
              width="800" />
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-[#ff6b6b]">Featured Handbags</h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div
                className="bg-[#ffefd5] rounded-lg shadow-lg overflow-hidden dark:bg-[#ffb6c1]">
                <img
                  alt="Handbag 1"
                  className="w-full h-64 object-cover"
                  height="400"
                  src="/bag2.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400" />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#ff6b6b]">Luxe Tote</h3>
                  <p className="text-[#ff0000] font-bold dark:text-[#ff0000]">₹1499</p>
                </div>
              </div>
              <div
                className="bg-[#ffefd5] rounded-lg shadow-lg overflow-hidden dark:bg-[#ffb6c1]">
                <img
                  alt="Handbag 2"
                  className="w-full h-64 object-cover"
                  height="400"
                  src="/bag3.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400" />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#ff6b6b]">Saffiano Satchel</h3>
                  <p className="text-[#ff0000] font-bold dark:text-[#ff0000]">₹3599</p>
                </div>
              </div>
              <div
                className="bg-[#ffefd5] rounded-lg shadow-lg overflow-hidden dark:bg-[#ffb6c1]">
                <img
                  alt="Handbag 3"
                  className="w-full h-64 object-cover"
                  height="400"
                  src="/bag4.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400" />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#ff6b6b]">Pebbled Crossbody</h3>
                  <p className="text-[#ff0000] font-bold dark:text-[#ff0000]">₹1399</p>
                </div>
              </div>
              <div
                className="bg-[#ffefd5] rounded-lg shadow-lg overflow-hidden dark:bg-[#ffb6c1]">
                <img
                  alt="Handbag 4"
                  className="w-full h-64 object-cover"
                  height="400"
                  src="/bag5.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400" />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#ff6b6b]">Structured Hobo</h3>
                  <p className="text-[#ff0000] font-bold dark:text-[#ff0000]">₹2549</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#ffefd5] py-8 dark:bg-[#ffb6c1]">
        <div
          className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <HandIcon className="h-6 w-6 text-[#ff6b6b]" />
            <span className="font-semibold text-lg text-[#ff6b6b]">Luxe Handbags</span>
          </div>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              className="text-[#ffb6c1] hover:text-[#ffefd5] dark:text-[#ffefd5] dark:hover:text-[#ffb6c1]"
              href="#">
              Privacy
            </Link>
            <Link
              className="text-[#ffb6c1] hover:text-[#ffefd5] dark:text-[#ffefd5] dark:hover:text-[#ffb6c1]"
              href="#">
              Terms
            </Link>
            <Link
              className="text-[#ffb6c1] hover:text-[#ffefd5] dark:text-[#ffefd5] dark:hover:text-[#ffb6c1]"
              href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function HandIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path
        d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ShoppingCartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
