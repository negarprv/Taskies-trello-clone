import { IdWrapper } from "@/types/global.types";
import { User } from "@/types/users.types";
import { getDirectoryPath } from "@/utils/getDirectoryPath";
import { parseJsonFile } from "@/utils/parseJsonFile";
import { NextResponse } from "next/server";

const USERS_DIRECTORY = getDirectoryPath("users.json");

const GET = async () => {
  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
  return NextResponse.json(users);
};



export { GET };