const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany({
        include: {
            posts: true,
        }
    });
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        }
    });
    // const user = await prisma.user.create({
    //     data: {
    //         name: `john_${users.length || 0}`,
    //         email: `${users.length || 0}_doe@mail.com`,
    //         posts:{
    //             create: {
    //                 title: 'test post',
    //                 content: 'hello this is the content'
    //             },
    //         },
    //     }
    // });

    // const post = await prisma.post.create({
    //     data: {
    //         title: 'test post 2',
    //         content: 'hello this is the content 2',
    //         authorId: 2,
    //     }
    // });

    console.dir(users, { depth: null});
    console.dir(posts, { depth: null});
}

main().then(() => {
    prisma.$disconnect()
})
.catch(e => {
    console.error(e);
    prisma.$disconnect();
});