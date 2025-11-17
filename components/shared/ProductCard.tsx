import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "../ui/button";

function ProductCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="bg-green-400 rounded-2xl w-max text-[10px] px-2 py-0.5 text-white">
            20%
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction className="rounded-full w-max text-[10px] px-2 py-0.5 text-white">
            <Heart size={25} fill="red" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <Image
            src={"/hero_images/hero_packet_desktop.png"}
            alt="medcine packet"
            width={250}
            height={200}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="flex mb-2">
            <Star className="size-4 text-amber-300"></Star>
            <Star className="size-4 text-amber-300"></Star>
            <Star className="size-4 text-amber-300"></Star>
            <Star className="size-4"></Star>
          </div>

          <div className="space-y-2">
            <p className="font-bold underline text-[14px]">
              Always Discreet Incontinence Pads Heavy Absorbency
            </p>
            <p className="text-[22px] text-green-500">
              $18.22 <span className="text-gray-600 text-[16px]">%$26.66</span>
            </p>
            <Button>Add to Cart</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductCard;
