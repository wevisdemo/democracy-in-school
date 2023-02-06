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

  const handleOpenVideoModal = () => {
    // setOpenVideoModal(true)
  }

  return (
    <Layout onClick={onClickPage}>
      <Decision openVideoModal={handleOpenVideoModal} expand={expand} setExpand={setExpand}></Decision>
    </Layout>
  )
}

export default Third
