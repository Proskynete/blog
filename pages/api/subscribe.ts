// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

interface ErrorResponseInterface {
  error: string;
}

interface SuccessResponseInterface {
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<SuccessResponseInterface | ErrorResponseInterface>) => {
  const { email, name } = req.body;
  console.log('req.body', email, name);

  const url = ({ _datacenter, _listid }) => `https://${_datacenter}.api.mailchimp.com/3.0/lists/${_listid}/members`;

  if (!email || !name) return res.status(409).json({ error: "Los datos son requeridos" });

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY.split("-")[1];

    console.log("ENV VARIABLES");
    console.log(LIST_ID, API_KEY, DATACENTER);

    const data = {
      email_addres: email,
      first_name: name,
      status: 'subscribed'
    }

    console.log(data)

    const response = await fetch(url({ _datacenter: DATACENTER, _listid: LIST_ID }), {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': "application/json"
      }, method: "POST"
    });

    console.log("response");
    console.log(response);

    if (response.status >= 400) return res.status(410).json({ error: "Hubo un error al intentar registrar el correo, no obstante puedes mandarme un correo a [soy@eduardoalvarez.cl] y así te agrego manualmente." });

    return res.status(201).json({ message: "Hemos registrado tu correo exitosamente! :D" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() }); 
  }
};