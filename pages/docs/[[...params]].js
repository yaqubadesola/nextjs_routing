
import { useRouter } from 'next/router'
export default function Docs() {
  const router = useRouter()
  const { params  } = router.query
  console.log(params);

  return (
    <h1>My Docs with dynamic route ALl params</h1>
  )
}
