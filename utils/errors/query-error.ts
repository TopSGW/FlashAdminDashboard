/** @format */

import axios from 'axios';
import { toast } from 'react-toastify';
import { BackendErrorResponse } from './backend-error-response';

export function onQueryError(r: unknown) {
	if (axios.isAxiosError(r) && r.response) {
		const response = r.response.data as BackendErrorResponse;

		if (!response.errors) {
			if (response.success === false && response.message) {
				toast.error(response.message);
			} else {
				toast.error('There was an issue. Please try again later.');
			}
		} else {
			Object.entries(response.errors || {}).forEach(([key, errors]) => {
				if (typeof errors === 'string') {
					toast.error(errors);
				} else {
					errors.forEach((message, subIndex) => {
						toast.error(message);
					});
				}
			});
		}
	}
}
