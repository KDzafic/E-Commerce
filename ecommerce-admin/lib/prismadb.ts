import { PrismaClient } from "@prisma/client";

//This declares a global variable prisma with the type PrismaClient | undefined. This declaration allows the prisma variable to be used globally throughout the application.
declare global {
    var prisma: PrismaClient | undefined
};

//This line initializes a variable prismadb with the value of globalThis.prisma if it exists, otherwise, it creates a new instance of PrismaClient. This ensures that there is only one instance of PrismaClient throughout the application.
const prismadb = globalThis.prisma || new PrismaClient();

//This condition checks if the environment is not set to production (NODE_ENV !== "production"), and if true, it sets the global prisma variable to the prismadb instance. This is often done during development to have a single instance of PrismaClient that can be reused across modules.
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;