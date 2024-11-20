import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";



const LoginButton = async ()=>{
    const signIn = await getSignInUrl();
    const {user} = await withAuth();
    if(!user){
        return(
            <Link className="py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md" href={signIn}>Nahi aaya maalik</Link>
        )
    }
    else{
        return(
            <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <p>Maalik aa gaye ^_^ {user.firstName && `, ${user.firstName}`}</p>
            <button className="py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md" type="submit">Sign out</button>
          </form>
        )
    }

}
export default LoginButton;
