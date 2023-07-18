import { useRouter } from "next/router";
function ClientId() {
    const router = useRouter();
    console.log(router.query);
    console.log(router.pathname);
    const loadProjectHandler = () => {
        // load data...
        // 兩種 router 寫法 
        // router.push("/clients/max/projectA");
        router.push({
            pathname: "/clients/[id]/[clientId]",
            query: { id: "max", clientId: "projectA" },
        });
    };
    return (
        <div>
            <h1>This is client {router.query.id} Page.</h1>
            <button>Load Project A</button>
        </div>
    );
}

export default ClientId;
