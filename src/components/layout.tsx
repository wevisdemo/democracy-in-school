import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('background/bg_white.01.png');
  overflow: hidden;
`

interface PropsType {
  children: ReactNode
  onClick?: () => void
}

export default function Layout({ children, onClick }: PropsType) {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <MainComponent onClick={onClick}>{children}</MainComponent>
    </motion.div>
  )
}
