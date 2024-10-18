import { User } from "@/types/users.types";

export async function getUserById( id: string) {
  try {
    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      "credentials": "include",
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "An error occurred while fetching user data");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
