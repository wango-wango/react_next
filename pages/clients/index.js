import Link from "next/link";

function client() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>This is client Page.</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >{client.name}</Link>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default client;
