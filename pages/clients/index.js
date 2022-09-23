import Link from "next/link";

export default function ClientPage() {
    const clients = [
        {id: 'max', name: "asdasdasd"},
        {id: "manu", name: 'sadasdsa'}
    ]
  return (
    <div>
        <h1>Client page</h1>
        <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query: {id: client.id},
                    }}>
                        {client.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
