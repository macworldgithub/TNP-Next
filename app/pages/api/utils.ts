import prisma from "./db"

export const getUser = async (username: string) => {
    console.log(username)
    // @ts-ignore
    const user = await prisma.tnp_user.findUnique({
        where: {
            username
        }
    })
    return user
}
