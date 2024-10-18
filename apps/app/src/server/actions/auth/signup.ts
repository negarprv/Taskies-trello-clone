import { User } from "@/types/users.types";

export async function signUp({ fullName, email, password }: User) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.error || 'Failed to signup'); 
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
