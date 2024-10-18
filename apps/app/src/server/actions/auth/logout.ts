export async function logout() {
    try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.error || 'Failed to logout'); 
          }

        return await response.json(); 

    } catch (error) {
        console.log(error);
        throw error; 
    }
}