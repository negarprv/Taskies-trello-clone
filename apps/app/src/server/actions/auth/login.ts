import { User } from "@/types/users.types";

export async function login({ email, password }: User) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.error || 'Failed to login'); 
    }

    return (await response.json()) as User;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
