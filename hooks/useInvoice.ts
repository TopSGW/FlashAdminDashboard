/** @format */

import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';
import { onQueryError } from '@utils/errors/query-error';
import { toast } from 'react-toastify';
export enum INVOICE_STATUS {
	TO_PAID = 'ToPaid',
	PAID = 'Paid',
}
export type InvoiceDataType = {
	invoiceId: string;
	startDate: Date;
	endDate: Date;
	totalShifts: number;
	amount: number;
	status: INVOICE_STATUS;
};
export interface InvoicesInterface extends BackendResponse {
	data?: {
		invoices: InvoiceDataType[];
	};
}
export type InvoicePayloadProps = {
	pagination: number;
	curpage: number;
	status: 'past' | 'open' | 'all';
};

export enum INVOICE_ACTION {
	PAY = 0,
	CANCEL = 1,
}
export type InvoiceUpdateProps = {
	id: string;
	status: INVOICE_ACTION;
};
const invoiceEndpoint = (payload: InvoicePayloadProps) =>
	`${config.bill.getInvoices}/${payload.status}/${payload.pagination}/${payload.curpage}`;
export default function useInvoice(payload: InvoicePayloadProps) {
	return useQuery([invoiceEndpoint(payload)], () => fetchInvoice(payload));
}
export function fetchInvoice(
	payload: InvoicePayloadProps
): Promise<InvoicesInterface> {
	return apiClient
		.get(config.bill.getInvoices, { params: payload })
		.then((res) => res.data);
}

export function useUpdateInvoice() {
	return useMutation(udpateInvoice, {
		onSuccess: (response: any) => {
			if (response.success) {
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r: any) => onQueryError(r),
	});
}

export function udpateInvoice(payload: InvoiceUpdateProps) {
	return apiClient
		.post(config.bill.updateInvoice, { payload })
		.then((res) => res.data);
}
