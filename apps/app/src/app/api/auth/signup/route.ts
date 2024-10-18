import { IdWrapper } from "@/types/global.types";
import { User } from "@/types/users.types";
import { getDirectoryPath } from "@/utils/getDirectoryPath";
import { parseJsonFile } from "@/utils/parseJsonFile";
import { uuid4 } from "@/utils/uuid4";
import { NextResponse } from "next/server";
import fs, { writeFileSync } from "fs";
import { join } from "path";
import { serialize } from "cookie";

const USERS_DIRECTORY = getDirectoryPath("users.json");

const POST = async (request: Request) => {
    await new Promise((reslove)=> setTimeout(reslove, 1000))

    const body: User = await request.json();
    const {fullName, email ,password}= body

    if (!fullName)
      return NextResponse.json({ error: "No Full Name!" }, { status: 403 });
    if(!email)
      return NextResponse.json({ error: "No Email!" }, { status: 403 });
    if(!password)
      return NextResponse.json({ error: "No Password!" }, { status: 403 });
  
    const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);

    const userExists = users.some(user => user.email === email);

     if (userExists) {
        return NextResponse.json({ message: "User already exists" }, { status: 409 });
     }
 
     const newUser = { ...body, id: uuid4() };
 
     const modifiedUsers = [...users, newUser];
 
     await fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(modifiedUsers));
 
   
     const cookie = serialize('user_id', String(newUser.id), {
       httpOnly: true,
       maxAge: 60 * 60 * 24, // 1 day
       path: '/',
     });
 
     const response = NextResponse.json(newUser);
     response.headers.set('Set-Cookie', cookie);
   
     return response;
  };

  export {POST}