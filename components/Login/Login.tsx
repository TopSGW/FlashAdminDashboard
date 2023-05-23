/** @format */

import logo from '../assets/logo/logo.png';
import eyeshow from '../assets/icons/eye-show.png';
import eyehidden from '../assets/icons/eye-hide.png';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import CookieAcceptBar from 'components/cookieAccpet';
import { useLogin } from '@hooks/useAuth';
import { toast } from 'react-toastify';
export default function Login() {
	const [showstate, setshowstate] = useState(false);
	const [password, Setpassword] = useState('');
	const [email, setEmail] = useState('');
	const [checkedstate, setcheckedstate] = useState(false);
	const handleVisible = () => {
		const password = document.querySelector('#password');
		const type =
			password?.getAttribute('type') === 'password' ? 'text' : 'password';
		password?.setAttribute('type', type);
		setshowstate(!showstate);
	};
	const router = useRouter();
	const login = useLogin();
	const handleLogin = () => {
		if (email === '' || password === '') {
			toast.warn('please input credential correctly');
			return;
		}
		login.mutate({ email, password, rememeber: checkedstate });
	};
	return (
		<div className=' w-screen h-screen bg-[#1B1B1B]'>
			<div className='pt-[14vh]'>
				<div className='mx-auto w-full px-4 sm:w-[600px]'>
					<div className='flex flex-row justify-center items-center w-full'>
						<div>
							<Image
								src={logo}
								className='w-[1.8rem] sm:w-[2.4rem] md:w-[2.9rem] lg:w-[3.5rem]'
								alt={'Dashboard'}
							/>
						</div>
						<div className=' ml-2'>
							<h1 className='text-white font-medium text-base sm:text-lg md:text-2xl lg:text-3xl'>
								Flash Admin
							</h1>
						</div>
					</div>
					<div className='mt-[80px]'>
						<p className='text-white text-sm sm:text-base md:text-lg'>
							Email Address
						</p>
					</div>
					<div className='mt-3 w-full'>
						<input
							type='email'
							className='py-3 px-4 bg-[#161616] text-[#717171] text-base w-full rounded-[10px] 
                        placeholder:text-[#717171] focus:outline-none'
							placeholder='example@gmail.com'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className='mt-3'>
						<p className='text-white text-sm sm:text-base md:text-lg'>
							Password
						</p>
					</div>
					<div className='mt-3 w-full flex flex-row items-center rounded-[10px] bg-[#161616] pr-2'>
						<input
							type='password'
							autoComplete='current-password'
							id='password'
							className='py-3 px-4 bg-[#161616] text-[#717171] text-base 
                            w-full rounded-[10px] focus:outline-none'
							onChange={(e) => Setpassword(e.target.value)}
							value={password}
						/>
						<Image
							src={showstate ? eyeshow : eyehidden}
							alt={'state'}
							className='w-[1em] cursor-pointer'
							onClick={() => handleVisible()}
						/>
					</div>
					<div className='mt-4 flex flex-row items-center'>
						{!checkedstate ? (
							<div
								className='w-[20px] h-[19px] border-[1px] rounded-sm border-solid border-[#BCBBB9]'
								onClick={() => setcheckedstate(!checkedstate)}
							></div>
						) : (
							<input
								type='checkbox'
								className='w-[20px] h-[19px] accent-[#1B1B1B] border-2 
                                border-solid border-[#BCBBB9]'
								onChange={() => setcheckedstate(!checkedstate)}
								checked
							/>
						)}
						<p className='text-[#BCBBB9] text-[0.875rem] ml-3'>Remember me</p>
						<p
							className='text-[#FCC005] text-[0.875rem] ml-auto mr-12 cursor-pointer'
							onClick={() => Setpassword('')}
						>
							Reset Password?
						</p>
					</div>
					<div className='w-[300px] mx-auto mt-10'>
						<button
							className='w-full mx-auto py-4 text-center bg-[#FBBF04] text-black 
                            text-lg font-bold rounded-sm'
							// onClick={() => router.push('/dashboard/overview')}
							onClick={() => handleLogin()}
						>
							Log in
						</button>
					</div>
					{/* <div className='mt-6 w-full flex flex-row justify-center items-center'>
                        <p className='text-gray-400 text-base'>Don`t have account yet?</p>
                        <p className='text-[#FBBF04] text-base ml-2 cursor-pointer' onClick={()=>router.push('/validate')}>New Account</p>
                    </div> */}
				</div>
			</div>
			<CookieAcceptBar />
		</div>
	);
}
