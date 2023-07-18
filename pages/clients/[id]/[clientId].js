import { useRouter } from "next/router";

function ClientSelected() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>
                This is client {router.query.id} - {router.query.clientId} Page.
            </h1>
        </div>
    );
}

export default ClientSelected;
