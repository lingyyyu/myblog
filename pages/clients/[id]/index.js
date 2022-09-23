import { useRouter } from "next/router"

export default function IdPage(){
    const router = useRouter()
    console.log(router.query)
    return (
        <div>This is ID: {router.query.id}</div>
    )
}