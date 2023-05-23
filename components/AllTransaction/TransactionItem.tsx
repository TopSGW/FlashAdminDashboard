/** @format */

import { ProfitType } from '@hooks/useTransaction';
import Image from 'next/image';
import arrowUp from '../assets/image/allTransaction/arrowUp.png';
interface ITableInterface {
	data: ProfitType;
}
export default function TransactionItem({ data }: ITableInterface) {
	return (
		<div className='mt-4 flex flex-row items-center'>
			<div className='flex justify-center items-center py-1 w-[40px] rounded-md bg-[#55BA68]/[.2]'>
				<Image src={arrowUp} width={24} alt={''} />
			</div>
			<div className='ml-12 flex flex-col'>
				<p className=' text-base text-[#55BA68]'>${data.amount}</p>
				<p className='text-[#717171] text-sm'>USDT/France (EURO)</p>
			</div>
			<div className='ml-auto mr-0 flex flex-col'>
				<p className=' text-xs text-[#717171]'>{data.date.toDateString()}</p>
				<p className='text-[#717171] text-xs'>
					{data.date.getTime()}:{data.date.getMinutes()}
				</p>
			</div>
		</div>
	);
}
