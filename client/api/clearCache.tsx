export default async function clearCache() {
  console.log('clearing cache');

  const request: RequestInfo = new Request(
    'https://dash-ql-backend.vercel.app/clearCache',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  await fetch(request)
    .then(() => {
      // alert("Cache cleared");
    })
    .catch((error) => {
      console.error({ error: `Error in setting cache` });
      console.log(error);
    });
}
