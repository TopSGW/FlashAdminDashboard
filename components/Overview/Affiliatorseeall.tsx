/** @format */

import Image from 'next/image';
import guy1 from '../assets/image/guys/guy1.png';
import { useDispatch, useSelector } from 'react-redux';
import { setOverAffiliator_SeeAllViewValue } from '@utils/slice/OverAffiliatorSlice';
import { setOverAffiliator_PaginationValue } from '@utils/slice/OverAffiliatorSlice';
import { OverAffiliator_paginationState } from '@utils/slice/OverAffiliatorSlice';
import { Pagination } from '@mui/material';

export default function AffiliatorSeeAllData() {
	const dispatch = useDispatch();
	const currentpage = useSelector(OverAffiliator_paginationState);
	const handlePagination = (e: any, page: number) => {
		dispatch(setOverAffiliator_PaginationValue(page));
	};
	return (
		<div className='pt-5 px-5 mt-1'>
			<div className='w-full max-xl:mt-4 rounded-md bg-[#1B1B1B] px-4 pt-6 pb-4'>
				<div className='flex flex-row items-center'>
					<h1 className='text-white text-lg font-bold'>All Activity from Affiliation</h1>
					<button
						className='bg-[#FBBF04] ml-auto rounded-md px-4 py-2 text-base
                            font-semibold'
						onClick={() => dispatch(setOverAffiliator_SeeAllViewValue(false))}
					>
						See Overview
					</button>
				</div>
				<table className='mt-4 table-auto w-full'>
					<thead>
						<tr className='text-white text-lg font-medium'>
							<th className='py-2 max-sm:hidden'>Order ID</th>
							<th className='py-2'>Customer Name</th>
							<th className='py-2 max-sm:hidden'>Date</th>
							<th className='py-2'>Amount</th>
							<th className='py-2 max-sm:hidden'>Tracking</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#F86E51] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Pending
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								#465269
							</td>
							<td className='py-2'>
								<div className='flex flex-row justify-center'>
									<Image src={guy1} width={30} alt={''} />
									<p className='text-[#8D8D93] text-base ml-2 self-center'>
										Guy Hawkins
									</p>
								</div>
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2 max-sm:hidden'>
								13/11/2022
							</td>
							<td className='text-[#8D8D93] text-base text-center py-2'>$99</td>
							<td className='py-2 max-sm:hidden'>
								<div className='text-[#55BA68] flex justify-center'>
									<button className='bg-[#141414] font-medium text-base px-4 py-1 rounded-md'>
										Completed
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div className='mt-4 flex justify-center'>
					<Pagination
						count={5}
						page={currentpage}
						onChange={handlePagination}
						color='primary'
						shape='rounded'
					/>
				</div>
			</div>
		</div>
	);
}