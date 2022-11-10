export async function fetchFrom<Type>(
  url: string,
  responseType: 'json' | 'text' = 'json'
): Promise<Type> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return (await responseType) === 'json' ? response.json() : response.text();
  } catch (error) {
    console.error('Fetch failed!');

    throw error;
  }
}
