/** @format */

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@utils/api';
import config from '@utils/api/config';

export type InvoicePayloadProps = {
	pagination: number;
	curpage: number;
	status: 'past' | 'open' | 'all';
};
const invoiceEndpoint = (payload: InvoicePayloadProps) =>
	`${config.bill.getInvoice}/${payload.status}/${payload.pagination}/${payload.curpage}`;
export default function useInvoice(payload: InvoicePayloadProps) {
	const { isLoading, data } = useQuery([invoiceEndpoint(payload)], () =>
		fetchInvoice(payload)
	);
	return { isLoading, data: data?.data, messsage: data?.message };
}
export function fetchInvoice(payload: InvoicePayloadProps) {
	return apiClient
		.get(config.bill.getInvoice, { params: payload })
		.then((res) => res.data);
}
