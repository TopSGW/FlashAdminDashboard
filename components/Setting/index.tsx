/** @format */

import HeaderA from 'components/Header/HeaderA';
import Sidebar from 'components/Sidebar/Sidebar';
import usersSvg from '../assets/image//setting/mdi_user.svg';
import Image from 'next/image';
import userAvartar from '../assets/image/setting/guy.png';
import useProfile, { useUpdateProfile } from '@hooks/useProfile';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function Setting() {
	const [user_name, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [first_name, setFirstName] = useState<string>('');
	const [last_name, setLastName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [img, setImg] = useState<string>('');
	const updateHandler = useUpdateProfile();
	const { isLoading, data, error } = useProfile();

	if (error) {
		toast.error((error as any)?.message);
	}
	if (!error && data && !data.success) {
		toast.warn(data.message);
	}
	const user = data && data?.data?.user ? data?.data.user : undefined;

	useEffect(() => {
		if (user) {
			setEmail(user?.email || '');
			setUserName(user?.userName || '');
			setFirstName(user?.firstName || '');
			setLastName(user?.lastName || '');
			setDescription(user?.description || '');
			setPhone(user?.phoneNumber || '');
		}
	}, [user]);
	const handleSaveChange = () => {
		if (
			user_name === '' ||
			email === '' ||
			(first_name === '' && last_name === '' && description === '') ||
			phone === ''
		) {
			toast.warn('Please input user infomation exactly');
			return;
		}

		updateHandler.mutate({
			email: email,
			firstName: first_name,
			lastName: last_name,
			description: description,
			phone: phone,
		});
	};
	return (
		<div className='m-0 p-0 w-auto'>
			<HeaderA />
			<div className='flex flex-row w-full pt-[70px]'>
				<Sidebar />
				<div className='w-full bg-[#141414] pb-10 pl-[300px] max-lg:pl-0'>
					<div className='pt-5 pl-10 max-lg:pl-5 max-sm:pl-4'>
						<h1 className='text-white sm:text-base lg:text-lg xl:text-xl font-bold leading-3'>
							Setting
						</h1>
					</div>
					<div className='mt-4 border-t-[1px] border-[#717171] border-solid'></div>
					<div className='mt-10 flex min-[1428px]:flex-row max-[1429px]:flex-col items-start px-10 max-lg:px-5 max-sm:px-4'>
						<div className='w-[232px] px-3 py-3 bg-[#1B1B1B]'>
							<div className='flex flex-row items-center'>
								<Image src={usersSvg} alt={'user'} />
								<h3 className='text-[#FBBF04] text-base ml-3 font-semibold'>
									Account
								</h3>
							</div>
						</div>
						<div className='ml-auto min-[1600px]:ml-[200px] w-[800px] max-[1429px]:mt-10 max-[1428px]:w-full rounded-lg bg-[#1B1B1B] p-3'>
							<h3 className='mt-1 text-white text-[17px]'>Account</h3>
							<p className='text-[#BCBBB9] mt-2 text-[12px]'>
								This information will be displayed publicly so be careful what
								you share.
							</p>
							<div className='mt-6 border-t-[1px] border-[#949494] border-solid'></div>
							<div className='mt-10 flex flex-row items-center'>
								<div className=''>
									<Image src={userAvartar} alt='' />
								</div>
								<div className='ml-8'>
									<button className='px-4 py-2 rounded-md bg-[#252525] text-white text-[14px]'>
										Change
									</button>
								</div>
							</div>
							<div className='mt-4 flex md:flex-row w-full max-md:flex-col'>
								<div className='w-[45%] max-md:w-full'>
									<h3 className='text-white text-[14px]'>First Name</h3>
									<input
										value={first_name}
										onChange={(e) => setFirstName(e.target.value)}
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
								<div className='w-[45%] max-md:w-full max-md:mt-4 ml-auto max-md:ml-0'>
									<h3 className='text-white text-[14px]'>Last Name</h3>
									<input
										value={last_name}
										onChange={(e) => setLastName(e.target.value)}
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
							</div>
							<div className='mt-4 flex md:flex-row w-full max-md:flex-col'>
								<div className='w-[45%] max-md:w-full'>
									<h3 className='text-white text-[14px]'>Username</h3>
									<input
										value={user_name}
										onChange={(e) => setUserName(e.target.value)}
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
								<div className='w-[45%] ml-auto max-md:ml-0 max-md:w-full max-md:mt-4'>
									<h3 className='text-white text-[14px]'>Email</h3>
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
							</div>
							<div className='mt-4'>
								<h3 className='text-white text-[14px]'>Description</h3>
								<textarea
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className=' mt-2 w-full min-h-[150px] bg-[#161616] rounded-lg p-4 text-[#717171] placeholder:text-[#717171]'
									placeholder='Type somthings'
								/>
							</div>
							<div className='mt-4 flex md:flex-row w-full max-md:flex-col'>
								<div className='w-[45%] max-md:w-full'>
									<h3 className='text-white text-[14px]'>Email</h3>
									<input
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
								<div className='w-[45%] ml-auto max-md:ml-0 max-md:w-full max-md:mt-4'>
									<h3 className='text-white text-[14px]'>Phone Number</h3>
									<input
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										className='w-full mt-2 rounded-md bg-[#161616] px-4 py-2 text-[#717171] placeholder:text-[#717171] text-[14px]'
										placeholder='Enter your name'
									/>
								</div>
							</div>
							<div className='mt-16 flex justify-end pb-5'>
								<button className='text-[14px] rounded-md px-4 py-2 text-[#FBBF04] border-solid border-[1px] border-[#FBBF04] bg-[#161616]'>
									Reset
								</button>
								<button
									className='ml-4 text-[14px] rounded-md px-4 py-2 bg-[#FBBF04] border-solid border-[1px] border-[#FBBF04]'
									onClick={handleSaveChange}
								>
									Save Change
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
