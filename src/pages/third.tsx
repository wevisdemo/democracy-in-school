import Layout from 'components/layout'
import Decision from 'components/templates/decision'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Third() {
  const [expand, setExpand] = useState<string>('center')
  const router = useRouter()

  const onClickPage = () => {
    if (expand === 'left') {
      router.push('/quiz')
    } else if (expand === 'right') {
      router.push('/quiz/list')
    }
  }

  return (
    <Layout onClick={onClickPage}>
      <Decision expand={expand} setExpand={setExpand}></Decision>
    </Layout>
  )
}

export default Third
