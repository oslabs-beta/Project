interface Querystr {
  query: string;
}

export interface QueryResponse {
  res: string;
  time: number;
  cacheHit: boolean;
  hitPercentage: number;
  missPercentage: number;
  totalQueries: number;
  totalHits: number;
  error: boolean;
}

export default async function getData(
  finalQuery: Querystr
): Promise<QueryResponse> {
  const request: any = new Request(
    "https://dash-ql-backend.vercel.app/dashQL",
    {
      method: "POST",
      body: JSON.stringify(finalQuery),
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log('request', request)

  const result: QueryResponse = await fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "error in fetching data");
    });
  return result;
}
