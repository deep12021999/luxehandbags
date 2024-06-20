/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lDtXdkr2YVa
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/bag36.png"
              width="550"
              height="550"
              alt="Luxe Handbag"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Contact Us</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get in touch with our team for any inquiries about our luxurious handbag collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefd5] text-[#8b4513]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Send us a message</h2>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="max-w-lg flex-1 bg-[#ffdab9] text-[#8b4513] placeholder:text-[#8b4513]" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="max-w-lg flex-1 bg-[#ffdab9] text-[#8b4513] placeholder:text-[#8b4513]" />
                </div>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[120px] bg-[#ffdab9] text-[#8b4513] placeholder:text-[#8b4513]" />
                  <Link href="/thankyou">
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-[#ffdab9] text-[#8b4513] hover:bg-[#ffc0cb]">
                  Submit
                </Button>
                </Link>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Get in touch</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <LocateIcon className="h-6 w-6 text-[#ffdab9]" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-[#8b4513]">123 Main Road, Sector 132, Noida</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-[#ffdab9]" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-[#8b4513]">+91 84555-54545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="h-6 w-6 text-[#ffdab9]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-[#8b4513]">info@luxehandbags.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FacebookIcon className="h-6 w-6 text-[#ffdab9]" />
                  <div>
                    <p className="font-medium">Social</p>
                    <div className="flex gap-4">
                      <Link href="#" className="text-[#8b4513] hover:text-[#ffdab9]" prefetch={false}>
                        <InstagramIcon className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-[#8b4513] hover:text-[#ffdab9]" prefetch={false}>
                        <TwitterIcon className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-[#8b4513] hover:text-[#ffdab9]" prefetch={false}>
                        <FacebookIcon className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
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
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function TwitterIcon(props) {
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
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}
