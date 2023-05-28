/** @format */

import logo from '../assets/logo/logo.png';
import eyeshow from '../assets/icons/eye-show.png';
import eyehidden from '../assets/icons/eye-hide.png';
import QRImg from '../assets/image/validate/QRscan.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthState, getAuth, setInit } from '@utils/slice/authenticateSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
	loginOTP,
	useLoginOTP,
	useSetupOTP,
	useVerifyOTP,
} from '@hooks/useAuth';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import CircleProgress from 'components/progress/circle';
export default function Validate() {
	const router = useRouter();
	const dispatch = useDispatch();
	const authInfo = useSelector(getAuth);
	const [isVerify, setIsVerify] = useState<Boolean>(false);
	const [otp, setOtp] = useState('');
	const isInit = (authInfo as AuthState)?.isInit;
	useEffect(() => {
		if (isInit) {
			setIsVerify(true);
		}
	}, [isInit]);
	const verifyHandler = useVerifyOTP();
	const otpLoginHandler = useLoginOTP();
	const handleVerify = () => {
		if (otp.length != 6) {
			toast.warn('please input code correctly');
			return;
		}
		if (isVerify) verifyHandler.mutate(otp);
		else otpLoginHandler.mutate(otp);
	};
	const handleState = () => {
		dispatch(setInit(false));
	};
	const { isLoading, data, error } = useSetupOTP(isInit);

	if (error) {
		toast.error((error as any)?.message);
	}

	if (!error && data && !data.success) {
		toast.warn(data.message);
	}

	const qrImage = data?.data?.qrImage ? data?.data?.qrImage : '';
	const secret = data?.data?.secret ? data?.data.qrImage : '';

	return (
		<div className='relative'>
			<div className=' w-screen h-auto bg-[#1B1B1B] z-10'>
				<div className='pt-[11vh]'>
					<div className='mx-auto w-full px-4 max-w-[768px]'>
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
						{isInit ? (
							<>
								<h3 className='mt-12 text-[16px] max-sm:text-[12px] text-center text-white font-bold'>
									Scan QR code with your oauth app
								</h3>
								<div className='mx-auto w-full flex justify-center'>
									{qrImage === '' ? (
										<Image src={QRImg} alt={''} className='max-sm:w-[90%]' />
									) : (
										<Image
											src={qrImage}
											width={300}
											height={300}
											alt={''}
											className='max-sm:w-[90%]'
										/>
									)}
								</div>
								<div
									className='mt-2 w-[90%] max-w-[760px] mx-auto'
									onClick={() => handleState()}
								>
									<button className='w-full font-medium px-4 py-3 bg-[#FBBF04] rounded-lg text-[#151103] text-[16px] max-sm:text-[14px] text-center'>
										validate
									</button>
								</div>
								<div className='pt-4 pb-6 flex flex-row w-full justify-center'>
									<h3 className='text-[#BCBBB9] text-sm'>Didn`t get a code?</h3>
									<h3 className='text-[#FBBF04] text-sm ml-1'>Resend</h3>
								</div>
							</>
						) : (
							<>
								<h3 className='mt-16 text-[16px] text-white sm:text-sm font-medium ml-2'>
									Enter your verification code
								</h3>
								<div className='max-w-[442px] ml-2'>
									<h3 className='mt-1 text-[#717171] text-[14px] max-sm:text-[12px] font-medium'>
										We have sent 6-digit code to your authentication application
										such as Google Authenticator or other.
									</h3>
								</div>
								<div className='mt-12'>
									{/* <div className='flex min-[360px]:justify-between overflow-y-auto'>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
										<input
											className='min-w-[50px] w-[50px] max-[359px]:m-1 h-[60px] sm:w-[90px] sm:h-[110px] rounded-md bg-[#252525]
                                             focus:outline-none text-[40px] text-center text-white'
											maxLength={1}
										></input>
									</div> */}
									<OtpInput
										value={otp}
										onChange={setOtp}
										numInputs={6}
										containerStyle={{
											width: '100%',
											flex: 1,
											justifyContent: 'space-between',
										}}
										renderSeparator={<span> </span>}
										inputStyle={{
											width: '12%',
											height: '110px',
											borderRadius: '10px',
										}}
										renderInput={(props) => <input {...props} />}
									/>
								</div>
								<h3 className='mt-3 text-[#717171] text-center text-[12px]'>
									{' '}
									Code expires in 5:00
								</h3>
								<div
									className='pt-[10vh] w-[90%] max-w-[760px] mx-auto'
									onClick={() => handleVerify()}
								>
									<button className='w-full font-medium px-4 py-3 bg-[#FBBF04] rounded-lg text-[#151103] text-[16px] max-sm:text-[14px] text-center'>
										{verifyHandler.isLoading || otpLoginHandler.isLoading ? (
											<CircleProgress />
										) : (
											<>validate</>
										)}
									</button>
								</div>
								<div className='pt-4 pb-6 flex flex-row w-full justify-center'>
									<h3 className='text-[#BCBBB9] text-sm'>Didn`t get a code?</h3>
									<h3 className='text-[#FBBF04] text-sm ml-1'>Resend</h3>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='w-screen h-screen bg-[#1B1B1B] absolute top-0 z-[-1]'></div>
		</div>
	);
}
