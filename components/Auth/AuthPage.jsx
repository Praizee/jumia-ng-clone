"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { BiArrowBack } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";

const AuthPage = () => {
  const router = useRouter();

  return (
    <section className="bg-white text-jumia-text relative h-screen flex flex-col items-center justify-center">
      <div className="w-full sm:max-w-[480px] mx-auto flex sm:hidden justify-start p-4">
        <button onClick={router.back} type="button" className="">
          <BiArrowBack className="size-6 text-black" />
          <span className="sr-only">Go back</span>
        </button>
      </div>

      <div className="w-full sm:max-w-[480px] mx-auto p-4 lg:px-0 flex flex-col gap-12 sm:gap-6 justify-center items-center text-center">
        <Link href="/">
          <Image
            src="https://my.jumia.com.ng/pictures/myjumia/myjumia-top-logo.png"
            alt="Jumia"
            className=""
            width={64}
            height={64}
            priority
            quality={90}
          />
        </Link>

        <span className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Welcome to Jumia</h2>
          <p>
            Type your e-mail or phone number to log in or create a Jumia
            account.
          </p>
        </span>

        {/* form */}
        <form className="w-full flex flex-col gap-8 md:px-4">
          <label
            htmlFor="email_or_mobile_number"
            className="relative block rounded-md border border-gray-400 hover:border-black shadow-sm focus-within:border-jumia-primary focus-within:ring-1 focus-within:ring-jumia-primary"
          >
            <input
              type="text"
              id="email_or_mobile_number"
              placeholder="Email or Mobile Number*"
              required
              className="peer p-3 md:py-4 text-base text-gray-500 border-none w-full bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 peer-focus:text-jumia-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
              Email or Mobile Number*
            </span>
          </label>

          <div className="flex flex-col text-xs items-center">
            <button
              type="submit"
              className="w-full text-base bg-jumia-primary text-white font-semibold p-3 md:py-4 rounded-md drop-shadow-md hover:drop-shadow-lg hover:bg-jumia-primary/90 transition-all duration-200 active:scale-95"
            >
              Continue
            </button>
            <p className="mt-2">By continuing you agree to Jumia’s</p>
            <Link href="" className="underline text-jumia-primary w-max">
              Terms and Conditions
            </Link>
          </div>

          <button
            type="button"
            className="w-full flex gap-4 items-center relative text-base bg-[#1877f2] text-white font-semibold p-3 md:py-4 rounded-md drop-shadow-md hover:drop-shadow-lg hover:bg-[#1877f2]/90 transition-all duration-200 active:scale-95"
          >
            <FaFacebookSquare className="size-7 absolute left-3" />
            <span className="flex-1 text-center">Log in with Facebook</span>
          </button>

          <p className="font-medium">
            For further support, you may visit the Help Center or contact our
            customer service team.
          </p>
        </form>

        <Link href="/">
          <Image
            src="https://my.jumia.com.ng/pictures/myjumia/myjumia-bottom-logo.png"
            alt="Jumia Logo"
            className=""
            width={97}
            height={16}
            priority
            quality={90}
          />
        </Link>
      </div>
    </section>
  );
};

export default AuthPage;
