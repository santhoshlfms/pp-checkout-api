// Next.js API route support: https://nextjs.org/docs/api-routes/introduction ewe

export default async function handler(req, res) {

  let URL = process.env.API_ENDPOINT + "/v2/checkout/orders";
  let reference = Math.floor(new Date().getTime() / 1000)
  let dataObject = {
    "intent": "CAPTURE",
    "purchase_units": [
      {
        "reference_id": reference,
        "amount": {
          "currency_code": "USD",
          "value": "2.00"
        },
        "payee": {
          "merchant_id": "LJSTXCBVLWU22"
        }
      }
    ],
    "application_context": {
      "brand_name": "PRIXSOFT",
      "locale": "en-US",
      "landing_page": "LOGIN",
      "shipping_preference": "GET_FROM_FILE",
      "user_action": "PAY_NOW",
      "return_url": "https://www.example.com",
      "cancel_url": "https://www.example.com"
    }
  }

  console.log(JSON.stringify(dataObject))

  var httpOptions = {
    method: "post",
    headers: {
      Authorization: process.env.API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObject),
  };

  const response = await fetch(URL, httpOptions);
  const data = await response.json();
  res.status(200).json({ data: data });
}
