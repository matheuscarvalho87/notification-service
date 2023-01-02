-- AlterTable
ALTER TABLE "Notification" ADD COLUMN "canceledAt" DATETIME;

-- CreateIndex
CREATE INDEX "Notification_recipientId_idx" ON "Notification"("recipientId");
