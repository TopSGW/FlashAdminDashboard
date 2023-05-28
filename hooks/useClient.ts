/** @format */

import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';
import { onQueryError } from '@utils/errors/query-error';
import { toast } from 'react-toastify';
export enum KYC_STATUS {
	NO_KYC = 'No KYC',
	KYC_1 = 'KYC-1',
	KYC_2 = 'KYC-2',
	KYC_3 = 'KYC-3',
}
export type CustomerType = {
	clientName: string;
	accountCreated: Date;
	totalAmount: number;
	kyc: KYC_STATUS;
};

export enum CLIENT_HIS_STATUS {
	NOT_SEND = 'Not Send',
	SENT = 'Sent',
	PENDING = 'Pending',
}
export type ClientHistoryType = {
	clientName: string;
	issuedDate: Date;
	dueDate: Date;
	amount: number;
	pair: string;
	status: CLIENT_HIS_STATUS;
};

export interface ClientHistoryInterface extends BackendResponse {
	data?: {
		history: ClientHistoryType[];
		totalRecord: number;
	};
}

export interface ClientInterface extends BackendResponse {
	data?: {
		customer: CustomerType[];
		totalRecord: number;
	};
}

export type ClientProps = {
	curPage: number;
	pagination: number;
};

export function useClientsHistory(payload: ClientProps) {
	return useQuery([config.client.getClientHistory, payload], () =>
		fetchClientsHistory(payload)
	);
}
export function useClients(payload: ClientProps) {
	return useQuery([config.client.customer, payload], () =>
		fetchClients(payload)
	);
}
export function fetchClientsHistory(
	payload: ClientProps
): Promise<ClientHistoryInterface> {
	return apiClient
		.get(config.client.getClientHistory, { params: payload })
		.then((res) => res.data);
}

export function fetchClients(payload: ClientProps): Promise<ClientInterface> {
	return apiClient
		.get(config.client.customer, { params: payload })
		.then((res) => res.data);
}
