/** @format */

import type { NextApiRequest, NextApiResponse } from 'next';
import { apiClient } from '@utils/api';
import urlConfig from '@utils/api/config';

// export const config = {
// 	runtime: 'experimental-edge',
// };

type Data = {
	status: boolean;
	message?: string;
	error?: any;
	user?: any;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const user = await apiClient
			.get(urlConfig.auth.getProfile)
			.then((res) => res.data);
		console.log('user', user);
		res.status(200).json({ status: true, user: user });
	} catch (e: any) {
		console.log(e);
		return res.status(500).json({ status: false, message: e?.message });
	}
}
