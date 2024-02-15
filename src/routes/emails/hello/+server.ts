import { json } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '@/lib/emails/hello.svelte';
import nodemailer from 'nodemailer';

import { env } from '$env/dynamic/private';
import type { RequestEvent } from '../$types';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: env.OWNER_EMAIL,
		pass: env.OWNER_APP_PASSWORD
	}
});

export async function POST(requestEvent: RequestEvent) {
	const { request } = requestEvent;

	const { name, email, message } = await request.json();

	const emailHtml = render({
		template: Hello,
		props: {
			message
		}
	});

	const options = {
		from: email,
		to: env.OWNER_EMAIL,
		subject: `New message from ${name} from your portfolio website`,
		html: emailHtml
	};

	const sendMailPromise = () =>
		new Promise((resolve, reject) => {
			transporter.sendMail(options, function (err) {
				if (!err) {
					resolve({ message: 'Email sent' });
				} else {
					reject({ message: err });
				}
			});
		});

	try {
		await sendMailPromise();
		return json({ status: 200, body: { message: 'Email sent' } });
	} catch (error) {
		return json({ status: 500, body: { message: 'Error sending email' } });
	}
}
