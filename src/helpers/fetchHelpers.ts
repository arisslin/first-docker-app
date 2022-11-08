export async function fetchJSON<Type>(url: string): Promise<Type> {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured. Status ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
