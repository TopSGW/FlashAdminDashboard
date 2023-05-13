import HeaderV from "../../../components/Header"
import DashboardRole from "../../../components/Role"
import { useRouter } from 'next/router';
export default function Role(){
    const router = useRouter();
    const { id } = router.query;

    if (typeof id !== 'string' && id !== undefined) {
		return router.push('/404');
	}

    return(
        <div>
            <HeaderV/>
            <main>
                <DashboardRole curPage={id ? parseInt(id) : 1} />
                <div className=" w-screen h-[100vh] z-[-1] bg-[#141414] fixed"></div>
            </main>   
        </div>
    )
}