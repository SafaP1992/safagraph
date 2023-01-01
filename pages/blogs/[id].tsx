import { useRouter } from 'next/router'

export default function post()
{
    const router = useRouter()
    console.log(router , 'routes')
    return ( <h2> Blog {router.query.id} </h2> )
}