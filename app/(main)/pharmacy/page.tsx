import Forbidden from "@/app/(auth)/forbidden";
import getServerSession from "@/utils/getServerSession";
import React from "react";

async function page() {
  const session = await getServerSession();

  if (!session) {
    return <Forbidden />;
  }

  if (session.user.role.includes("PHARMACY")) {
    return <div>This is a pharmacy profile page</div>;
  } else {
    return (
      <div className="min-h-screen grid place-content-center text-2xl text-emerald-500 px-5">
        Create a Pharmacy to view your Pharmacy Profile details.
      </div>
    );
  }
}

export default page;
