import { FunctionComponent } from 'react'
import Head from 'next/head'
import { prefix } from 'utils'

interface MetadataProps {
  title?: string
  imageSrc?: string
  description?: string
}

const DEFAULT_DESCRIPTION = `ทดสอบความเป็นประชาธิปไตยเราเคารพสิทธิเสรีภาพแบบไหน`

const Metadata: FunctionComponent<MetadataProps> = ({ title, imageSrc, description = DEFAULT_DESCRIPTION }) => {
  const fullTitle = `Democracy in school`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageSrc || `${prefix}/og/og-default.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Metadata
