import WvNavbar from '@wevisdemo/ui/react/navbar'
import WvNavButton from '@wevisdemo/ui/react/nav-button'

const Navbar = () => {
  return (
    <WvNavbar dark title="DEMOCRACY IN SCHOOL" logoAddonSrc="/fnf-logo.svg">
      <WvNavButton dark>Knowledge</WvNavButton>
      <WvNavButton dark>Quiz</WvNavButton>
      <WvNavButton dark>About</WvNavButton>
    </WvNavbar>
  )
}

export default Navbar
