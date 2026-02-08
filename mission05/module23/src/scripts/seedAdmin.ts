import { prisma } from "../lib/prisma"
import { UserRole } from "../modules/post/post.router";


async function seedAdmin() {


    try {
        console.log('seeding started')
        const userData = {
            name: 'yy',
            email: 'nfff@gmail.com',
            password: 'afdasfdf1234',
            role: UserRole.ADMIN

        }
        // console.log(userData)

        const existingUSer = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        });

        console.log(existingUSer)

        if (existingUSer) {
            throw new Error("user already exists ")
        }

        const signupUser = await fetch('http://localhost:3000/api/auth/sign-up/email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                 'Origin': 'http://localhost:4000'
            },
            body: JSON.stringify(userData)
        })
        console.log('admin created')
           
        const data = await signupUser.json();   // ⭐ THIS LINE IS THE KEY
        console.log("Response Body:", data);
          
        if(signupUser.ok){
         
              await prisma.user.update({
                where: {
                     email: userData.email
                },
                data: {
                    emailVerified:true
                }
              })



        }
        console.log("success email verified")

    }


    catch (error) {

        console.log(error)

    }



}

// seedAdmin()