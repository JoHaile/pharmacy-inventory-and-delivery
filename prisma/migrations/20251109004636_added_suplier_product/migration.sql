-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'CUSTOMER';

-- AlterTable
ALTER TABLE "pharmacy" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "pharmacyId" TEXT,
ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';

-- CreateTable
CREATE TABLE "SupplierProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unitCost" DOUBLE PRECISION NOT NULL,
    "imagePath" TEXT NOT NULL,
    "isAvailableForPurchase" BOOLEAN NOT NULL DEFAULT true,
    "supplierId" TEXT NOT NULL,

    CONSTRAINT "SupplierProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "pharmacy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierProduct" ADD CONSTRAINT "SupplierProduct_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
