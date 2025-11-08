import prisma from "@/lib/prisma";

export async function main() {
  const supplier = await prisma.supplier.create({
    data: {
      name: "Abeba Pharma Distribution",
      address: "Mexico Square",
      city: "Addis Ababa",
      phoneNumber: 911223344,
      licenseNo: "LIC-2025-001",
    },
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
