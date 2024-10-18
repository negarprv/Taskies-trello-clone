import { serialize } from 'cookie';
import { IdWrapper } from '@/types/global.types';
import { User } from '@/types/users.types';
import { parseJsonFile } from '@/utils/parseJsonFile';
import { getDirectoryPath } from '@/utils/getDirectoryPath';
import { NextResponse } from 'next/server';

const USERS_DIRECTORY = getDirectoryPath("users.json");

const POST = async (request: Request) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const body: User = await request.json();
    const { email, password } = body;

    const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const cookie = serialize('user_id', String(user.id), {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        const response = NextResponse.json(user);
        response.headers.set('Set-Cookie', cookie);
        return response; 
    }

    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
}

export { POST }
