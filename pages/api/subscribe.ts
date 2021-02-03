import {
	ErrorResponseInterface,
	SuccessResponseInterface,
} from 'models/subscribe.model';
import { NextApiRequest, NextApiResponse } from 'next';
const client = require('@mailchimp/mailchimp_marketing');

const TAGS = {
	SEND_POST_MAIL: 'SendPostMail',
	FROM_WEB_PAGE: 'FromWebPage',
};

client.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_API_KEY.split('-')[1],
});

export default async (
	req: NextApiRequest,
	res: NextApiResponse<SuccessResponseInterface | ErrorResponseInterface>,
) => {
	const { email, name } = req.body;

	if (!email || !name)
		return res
			.status(409)
			.json({ error: 'El nombre y el correo son requeridos.' });

	try {
		await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
			email_address: email,
			status: 'subscribed',
			tags: [TAGS.SEND_POST_MAIL, TAGS.FROM_WEB_PAGE],
			merge_fields: {
				FNAME: name,
			},
		});

		return res.status(200).json({ message: 'Gracias por tu subscripción! ❤' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
