import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { shortenText } from "@/lib/formatter";
import Image from "next/image";

export default function TopSellingItem() {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>Top Selling Item</CardTitle>
          <CardDescription>
            The top ordered prouct <br />
            This Week
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center justify-between">
            <Image src={"/pill.png"} alt="pill image" width={40} height={40} />
            <p className="text-[14px] font-light">
              ${shortenText("Parctamol", 10)}
            </p>
            <p className="text-[14px] font-light">150$</p>
          </div>
          <div className="flex items-center justify-between">
            <Image src={"/pill.png"} alt="pill image" width={40} height={40} />
            <p className="text-[14px] font-light">
              {" "}
              ${shortenText("Condom", 10)}
            </p>
            <p className="text-[14px] font-light">150$</p>
          </div>
          <div className="flex items-center justify-between">
            <Image src={"/pill.png"} alt="pill image" width={40} height={40} />
            <p className="text-[14px] font-light">
              {" "}
              ${shortenText("PainKiller", 10)}
            </p>
            <p className="text-[14px] font-light">150$</p>
          </div>
          <div className="flex items-center justify-between">
            <Image src={"/pill.png"} alt="pill image" width={40} height={40} />
            <p className="text-[14px] font-light">
              {" "}
              ${shortenText("Herbal Medicine", 10)}
            </p>
            <p className="text-[14px] font-light">150$</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
