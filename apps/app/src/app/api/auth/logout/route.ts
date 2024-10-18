
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

const POST = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const cookie = serialize('user_id', '', {
        httpOnly: true,
        maxAge: -1, 
        path: '/',
    });

    const response = NextResponse.json({ message: "Logged out successfully." });
    response.headers.set('Set-Cookie', cookie);
    return response;
}

export { POST }
