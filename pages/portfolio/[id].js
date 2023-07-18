import { useRouter } from "next/router";

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.query.id);
    const id = router.query.id;

    return (
        <div>
            <h1>Project {id} page</h1>
        </div>
    );
}
export default PortfolioProjectPage;
