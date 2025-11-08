import prisma from "@/lib/prisma";
import data from "./supplier.json";

export async function main() {
  const supplier = await prisma.supplier.createMany({
    data: data,
    skipDuplicates: true,
  });
  console.log("✅ Supplier Seeded:", supplier);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error Seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
