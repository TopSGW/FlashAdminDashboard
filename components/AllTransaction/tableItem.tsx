/** @format */

import { OrdersType } from '@hooks/useTransaction';
import Image from 'next/image';

import arrowUp from '../assets/image/allTransaction/arrowUp.png';

interface ITableInterface {
	data: OrdersType;
}

export default function tableItem({ data }: ITableInterface) {
	return (
		<tr>
			<td className='py-2'>
				<div className='flex flex-row items-center'>
					<div className='w-[30px] bg-[#55BA68]/[.2] flex justify-center py-3 rounded-md'>
						<Image src={arrowUp} width={15} alt={''} />
					</div>
					<div className='ml-2'>
						<p className='text-white text-sm'>{data.accountName}</p>
						<p className=' mt-1 text-[#717171] text-xs'>2254 5485 6958 2546</p>
					</div>
				</div>
			</td>
			<td className='py-2 max-sm:hidden'>
				<div className='w-full flex flex-row'>
					<div
						className='px-2 py-1 bg-[#55BA68]/[.2] flex flex-row 
                    items-center rounded-md'
					>
						<Image src={arrowUp} width={12} alt={''} />
						<p className='ml-2 text-[#55BA68] text-xs'>{data.changeRate}%</p>
					</div>
				</div>
			</td>
			<td className='py-2 max-sm:hidden'>
				<div className='text-white text-center'>
					<p className='text-base'>${data.total}</p>
				</div>
			</td>
			<td className='py-2 text-right'>
				<div className='text-white'>
					<p className='text-base'>${data.profit}</p>
				</div>
			</td>
		</tr>
	);
}
