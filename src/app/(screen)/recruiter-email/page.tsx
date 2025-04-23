import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecruiterEmail() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[url('/assets/email-woman.svg')] bg-no-repeat bg-cover bg-center p-4 sm:p-8 md:p-10 font-raleway">
      {/* Logo */}
      <div className="self-start mb-6">
        <Link href="/">
          <Image
            src="/assets/portgig-2.svg"
            alt="Portgig Logo"
            width={120}
            height={120}
            className="w-[100px] sm:w-[120px] h-auto"
          />
        </Link>
      </div>

      {/* Content Box */}
      <div className=" bg-white p-5 sm:p-8 rounded-lg shadow-lg flex flex-col gap-6 items-center justify-center text-primary my-auto">
        <Image
          src="/assets/email-confirmation.svg"
          alt="Email Confirmation"
          width={400}
          height={300}
          className="w-full max-w-md h-auto"
        />

        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center font-ramaraja">
          Email Confirmation
        </h2>

        <p className="text-[12px] sm:text-base text-center font-medium">
          We have sent an email to <strong>johndoe@gmail.com</strong> to confirm
          the validity of your email address. Kindly check your inbox and click
          the link to complete your registration.
        </p>

        <hr className="w-full border-t border-primary" />

        <h2 className="text-[10px] sm:text-base text-center">
          If you haven’t gotten the mail yet{" "}
          <span className="font-bold underline cursor-pointer">
            Resend confirmation email
          </span>
        </h2>
      </div>
    </main>
  );
}
