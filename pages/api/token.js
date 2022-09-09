// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  let URL = process.env.API_ENDPOINT + "/v1/oauth2/token";
  let dataObject = new URLSearchParams();
  dataObject.append(`grant_type`, `client_credentials`);
  dataObject.append(`response_type`, `token`);

  var httpOptions = {
    method: "post",
    headers: {
      Authorization: process.env.API_TOKEN,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: dataObject,
  };

  const response = await fetch(URL, httpOptions);
  const data = await response.json();
  res.status(200).json({ data: data });
}
