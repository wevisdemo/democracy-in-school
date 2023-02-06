import WvNavbar from '@wevisdemo/ui/react/navbar'
import WvNavButton from '@wevisdemo/ui/react/nav-button'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const MyNavbar = styled.div`
  z-index: 200;
`

const Navbar = () => {
  const router = useRouter()
  // todo: chage story to knowledge every spot
  return (
    <MyNavbar>
      <WvNavbar dark title="DEMOCRACY IN SCHOOL" logoAddonSrc="fnf-logo.svg">
        <WvNavButton dark onClick={() => router.push('/story')}>
          Knowledge
        </WvNavButton>
        <WvNavButton dark onClick={() => router.push('/quiz')}>
          Quiz
        </WvNavButton>
        <WvNavButton dark onClick={() => router.push('/about')}>
          About
        </WvNavButton>
      </WvNavbar>
    </MyNavbar>
  )
}

export default Navbar
