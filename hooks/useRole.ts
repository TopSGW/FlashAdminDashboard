/** @format */

import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient, queryClient } from '@utils/api';
import config from '@utils/api/config';
import { ROLE } from 'components/Role';
import {toast} from "react-toastify"
import { onQueryError } from '@utils/errors/query-error';
export type createAdminPayload = {
	role:ROLE,
	email:string;
	roleDescription:string;
	password:string;
}
export type getRolePayload = {
	pagination: number;
	curpage: number;
	search?: string;
};
const endpoint = (limit: number, curPage: number, search?: string) =>
	`${config.auth.searchAdmin}/${limit}/${curPage}/${search}`;

export default function (payload: getRolePayload) {
	const { isLoading, data } = useQuery(
		[endpoint(payload.pagination, payload.curpage, payload.search)],
		() => fetchRoleApi(payload)
	);
	return {isLoading,data}
}

export function useCreateAdmin(pagination:number,curpage:number,search?:string){
	return useMutation(createAdmin,{
		onSuccess: (response) => {
			if (response.success) {
				toast.success("success!");
				queryClient.invalidateQueries([endpoint(pagination,curpage,search)]);
			} else {
				toast.warn(response.message);
			}
		},
		onError: (r) => onQueryError(r),
	})
}

export function fetchRoleApi(payload: getRolePayload) {
	return apiClient
		.get(config.auth.searchAdmin, { params: payload })
		.then((response) => response.data);
}

export function createAdmin(payLoad:createAdminPayload){
	return apiClient.post(config.auth.createAdmin,payLoad).then(res=>res.data)
}