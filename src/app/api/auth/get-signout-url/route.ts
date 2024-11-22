// import { WorkOS } from "@workos-inc/node";

// const workos = new WorkOS(process.env.WORKOS_API_KEY,{
//     clientId: process.env.WORKOS_CLIENT_ID,
// });

// const session = await workos.userManagement.loadSealedSession({
//     sessionData: 'sealed_session_cookie_data',
//     cookiePassword: 'password_previously_used_to_seal_session_cookie',
//   });

import { getSession } from '@workos-inc/authkit-nextjs';
import { WorkOS } from '@workos-inc/node';
import { NextResponse } from 'next/server';

const workos = new WorkOS('sk_test_123');



export async function GET(){
    const userInfo = await getSession();
    const logoutUrl = workos.userManagement.getLogoutUrl({
        sessionId: userInfo?.sessionId ?? '',
      });
      console.log(logoutUrl)
      
      return NextResponse.json(logoutUrl);
    
}

