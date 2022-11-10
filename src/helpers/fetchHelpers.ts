export async function fetchFrom<Type>(url: string): Promise<Type> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('Fetch failed!');

    throw error;
  }
}
