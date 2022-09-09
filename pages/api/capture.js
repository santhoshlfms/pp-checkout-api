// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  let URL = process.env.API_ENDPOINT + "/v2/checkout/orders/CAPTUREID/capture";
  URL.replace("CAPTUREID", req.query.captureId)

  var httpOptions = {
    method: "post",
    headers: {
      Authorization: process.env.API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  };

  const response = await fetch(URL, httpOptions);
  const data = await response.json();
  res.status(200).json({ data: data });
}
