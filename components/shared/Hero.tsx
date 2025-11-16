import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-[60vh] gap-x-10 mt-7">
      <div className="flex-1 space-y-5">
        <h4 className="text-[15px]">Exclusive Discounts</h4>
        <h1 className="text-3xl md:text-5xl">
          Where Little Dreams Take Big Steps
        </h1>
        <p className="text-gray-600 text-[13px]">
          Quisque venenatis malesuada ipsum. Nulla mollis egesta tellus vitae
          feugiat. Donec mollis vitae urna id pharetra. Cras sit amet mi erat.
          In at felis sit amet quam tincidunt pharetra sed quis risus
        </p>
        <Button>View All Product</Button>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image
          className="block md:hidden"
          src={"/hero_images/hero_packet_desktop.png"}
          alt="medicine pictures"
          width={300}
          height={250}
        />
        <Image
          className="hidden md:block"
          src={"/hero_images/hero_packet_desktop.png"}
          alt="medicine pictures"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Hero;
