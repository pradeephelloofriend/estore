import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import db from "@/utils/db";
db.connectDb();
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    /*GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),*/
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
       
        async authorize(credentials, req) {
          //const client = await db.connectDb()
       
          // Add logic here to look up the user from the credentials supplied
          console.log('credentials',credentials)
          const email=credentials.email;
          const password=credentials.password
          const user= await User.findOne({email})
          console.log('user',user)
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return SignInUser({password,user})
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            throw new Error("This email does not exist")
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
      Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuer: process.env.AUTH0_ISSUER
      }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true,
      })
    // ...add more providers here
  ],
  callbacks:{
    async jwt({token,user}){
      return{...token,...user}
    },
    async session({session,token}){
      console.log('token',token)
      let user=await User.findById(token.sub);
      session.user.id=token.sub || user._id.toString(),
      session.user.role=user.role || "user";
      session.accessToken=token.jti+"-"+token.iat+"-"+token.exp || "user";
      token.role=user.role || "user";
      return session
    }
  },
  pages:{
    signIn:'/login',
  },
  session:{
    strategy:"jwt",
  },
  secret:process.env.JWT_SECRETE
}
export default NextAuth(authOptions)
const SignInUser=async({password,user})=>{
  if (!user.password) {
    throw new Error("Please enter your password");
  }
  const testPassword=await bcrypt.compare(password,user.password);
  if (!testPassword) {
    throw new Error("Email or password is wrong !!");
  }
  return user
}