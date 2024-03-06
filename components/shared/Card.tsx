import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Image
        src="/assets/images/parliament.jpg"
        alt="parliament building"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        <div className="flex gap-2">
          <p className="p-semibold-14 w-min rounded-full bg-purple-500/50 px-4 py-1 text-grey-500 line-clamp-1">
            FREE
          </p>
        </div>

        <Link href={`/events/`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            Visit the Parliament building
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            Organized by Bob Smith
          </p>
        </div>
        <p className="p-medium-16 p-medium-18 text-grey-500">Learn More</p>
      </div>
    </div>
  );
};

export default Card;
