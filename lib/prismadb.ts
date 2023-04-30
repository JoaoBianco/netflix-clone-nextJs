import { PrismaClient } from "@prisma/client";

const client =
  global.prismadb ||
  new PrismaClient({ datasources: { db: { url: process.env.DATABASE_URL } } });
if (process.env.NODE_ENV === "production")
  global.prismadb = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });

export default client;
