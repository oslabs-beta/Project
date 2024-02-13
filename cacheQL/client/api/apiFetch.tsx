interface Querystr {
  query: string;
}

export default async function getData(finalQuery: Querystr) {
  console.log("------in fetch---------");

  const request: RequestInfo = new Request("http://localhost:5001/dashQL", {
    method: "POST",
    body: JSON.stringify(finalQuery),
    headers: { "Content-Type": "application/json" },
  });

  const result = await fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error({ error: `Error in fetching query data` });
    });
  return result;
}
