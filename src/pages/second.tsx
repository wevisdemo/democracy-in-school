import Layout from 'components/layout'
import Intro from 'components/templates/intro'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

function Second() {
  const router = useRouter()

  const onClickPage = () => {
    console.log('clickkk')
    router.push('/third')
  }

  return (
    <Layout onClick={onClickPage}>
      <Intro />
    </Layout>
  )
}

export default Second
