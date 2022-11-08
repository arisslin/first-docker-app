export async function fetchJSON(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured. Status ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
