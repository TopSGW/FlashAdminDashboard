/** @format */

import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient, BackendResponse } from '@utils/api';
import config from '@utils/api/config';
import { onQueryError } from '@utils/errors/query-error';
import { toast } from 'react-toastify';
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
		customer: ClientHistoryType[];
	};
}

export type ClientProps = {
	curPage: number;
	pagination: number;
};

export function useClientsHistory(payload: ClientProps) {
	return useQuery([config.client.getClientHistory, payload], () =>
		fetchClients(payload)
	);
}
export function fetchClients(
	payload: ClientProps
): Promise<ClientHistoryInterface> {
	return apiClient
		.get(config.client.getClientHistory, { params: payload })
		.then((res) => res.data);
}
