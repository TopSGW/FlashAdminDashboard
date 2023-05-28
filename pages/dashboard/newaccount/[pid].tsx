/** @format */

import HeaderV from '../../../components/Header';
import DashboardNewAccount from '../../../components/NewAccount';
import { useRouter } from 'next/router';
export default function NewAccount() {
	const router = useRouter();
	const { pid } = router.query;
	
	if (typeof pid !== 'string' && pid !== undefined) {
		return router.push('/404');
	}

	return (
		<div>
			<HeaderV />
			<main>
				<DashboardNewAccount curPage={pid ? parseInt(pid) : 1} />
				<div className=" w-screen h-[100vh] z-[-1] bg-[#141414] fixed"></div>
			</main>
		</div>
	);
}
