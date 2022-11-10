export async function fetchJSON<Type>(url: string): Promise<Type> {
  try {
    const response = await fetch(url, { method: '' });

    return await response.json();
  } catch (error) {
    console.error('Fetch failed!');

    throw error;
  }
}
