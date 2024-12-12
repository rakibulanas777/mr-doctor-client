import Image from "next/image";
import { Fragment } from "react";
import bannerImg from "../public/medicare.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
        <p className="text-sm w-[32rem] mx-auto sm:text-lg md:text-xl lg:text-2xl font-semibold text-secondary-content">
          Unsure about your health? Get reliable medical advice tailored for
          you!
        </p>

        <div className="flex items-center justify-center pt-5 space-x-4">
          <Link href="/classification">
            <button
              className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Get Started
            </button>
          </Link>
          {/* <Link href="/register">
            <button
              className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              register
            </button>
          </Link> */}
        </div>
      </div>
    </Fragment>
  );
}
