import { Cookies, IdWrapper } from "@/types/global.types";
import { User } from "@/types/users.types";
import { getDirectoryPath } from "@/utils/getDirectoryPath";
import { parseJsonFile } from "@/utils/parseJsonFile";
import fs from "fs";
import { NextResponse } from "next/server";
import { parse } from "cookie";

const USERS_DIRECTORY = getDirectoryPath("users.json");

type Params = {
  id: string;
};

const GET = async (request: Request) => {
  const cookieHeader = request.headers.get('cookie') || '';
    const cookies: Cookies = parse(cookieHeader); 

    const userId = cookies.user_id;

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);

  const user = users.find((user) => user.id === userId);

 if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
};

const PUT = async (request: Request, context: { params: Params }) => {
  const body = await request.json();
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const modifiedUser = { ...body, id };
  const modifiedUsers = users.filter((i) => i.id !== id).concat(modifiedUser);

  await fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(modifiedUsers));

  return NextResponse.json(modifiedUser);
};

const DELETE = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;

  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);

  if (!id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const user = users.find((user) => user.id === id);
  if (!user) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const modifiedUsers = users.filter((i) => i.id !== id);

  await fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(modifiedUsers));

  return NextResponse.json({ message: "deleted" });
};

export { DELETE, GET, PUT };