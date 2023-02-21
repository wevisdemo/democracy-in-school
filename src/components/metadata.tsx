import { FunctionComponent } from 'react'
import Head from 'next/head'
import { prefix } from 'utils'

interface MetadataProps {
  title?: string
  imageSrc?: string
  description?: string
}

const DEFAULT_DESCRIPTION = `แตกต่างได้ไหม? เพราะประชาธิปไตยควรเคารพกัน
ชวนมาเรียนรู้และทดสอบความเข้าใจเกี่ยวกับสิทธิเสรีภาพกัน
#DemocracyinSchool`

const Metadata: FunctionComponent<MetadataProps> = ({ title, imageSrc, description = DEFAULT_DESCRIPTION }) => {
  const fullTitle = `Democracy in School`

  return (
    <Head>
      <link rel="icon" href={`${prefix}/favicon.png`} />
      <title>{title || fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageSrc || `${prefix}/og/og-default.png`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Metadata
