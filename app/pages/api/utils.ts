import prisma from "./db"

export const getUser = async (email: string) => {
    // @ts-ignore
    const user = await prisma.tnp_user.findUnique({
        where: {
           email 
        }
    })
    return user
}
