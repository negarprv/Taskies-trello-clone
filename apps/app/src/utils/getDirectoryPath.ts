import path from "path";


export function getDirectoryPath(filename: string) {
  const DB_DIRECTORY = path.join(process.cwd(), "src/server/db");

  return path.join(DB_DIRECTORY, filename);
}