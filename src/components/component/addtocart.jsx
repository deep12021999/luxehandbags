/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oy2zJApyvam
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { Prata } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Addtocart() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="bg-[#FFF0E6] text-[#FF6B3D] py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HandIcon className="w-6 h-6" />
          <span className="text-xl font-bold">Luxury Handbags</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/collection" className="hover:underline" prefetch={false}>
            Shop
          </Link>
          <Link href="/aboutus" className="hover:underline" prefetch={false}>
            About US
          </Link>
          <Link href="/contact" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          
          <Link href="/login" className="hover:underline" prefetch={false}>
            <UserIcon className="w-5 h-5" />
          </Link>
          
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <ShoppingCartIcon className="w-12 h-12 text-[#FFB8B2]" />
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-[#FFB8B2]">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/">
            <Button variant="outline" size="lg" className="bg-[#FFF0E6] text-[#FF6B3D]">
              Continue Shopping
            </Button>
            </Link>
          </div>
        </div>
      </main>
      <div className="bg-[#FFF0E6] py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_300px] gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="font-semibold text-[#FF6B3D]">₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">₹0</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-2xl font-bold">₹0</span>
              </div>
            </div>
          </div>
          <div>
            <Button size="lg" className="w-full bg-[#FFF0E6] text-[#FF6B3D]" disabled>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
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
