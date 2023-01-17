import Dropdown from 'components/shared/dropdown'
import styled from 'styled-components'
import { ending as ending_data } from 'data/ending'
import { IDropdownOption } from 'types/shared'
import { useState } from 'react'
import { IEndingShare } from 'types/ending'
import WvSharer from '@wevisdemo/ui/react/sharer'

const EndingShareContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-wrapper {
    width: 40%;
    z-index: 20;
    margin-top: 108px;
    text-align: center;

    .text-description {
      margin-top: 10px;
    }
  }

  .dropdown-wrapper {
    margin-top: 30px;
  }

  .share-og-image {
    max-width: 828px;
    margin-top: 20px;

    @media (max-width: 1024px) {
      max-width: 300px;
    }
  }

  .share-social-wrapper {
    margin-top: 48px;
  }

  .hashtag {
    margin-top: 40px;
  }
`

const mockOptions: IDropdownOption[] = ending_data.shares.map((d) => {
  return { label: d.topic, value: d.topic }
})

const EndingShare = () => {
  const [currShare, setCurrShare] = useState<IEndingShare>(ending_data.shares[0])

  return (
    <EndingShareContainer>
      <div className="text-wrapper">
        <h6 className="wv-h6 wv-font-kondolar ">แชร์ / ชวนเพื่อนมาเล่นควิซนี้!</h6>
        <p className="wv-h6 wv-font-kondolar ">สร้างสังคมประชาธิปไตย เริ่มจากการเคารพความคิดเห็นที่ต่างกัน</p>
        <p className="wv-b2 font-plexsans text-description">
          เราได้ร่วมแสดงความเห็นเพื่อสร้างสังคมประชาธิปไตย ด้วยการเคารพความเห็นต่างด้วยกัน
        </p>
      </div>
      <div className="dropdown-wrapper">
        <Dropdown options={mockOptions} />
      </div>
      <img className="share-og-image" src={currShare.og_image_src} alt="og-image" />
      <div className="share-social-wrapper font-plexsans">
        <WvSharer url="https://wevis.info" />
      </div>
      <h5 className="wv-h5 wv-font-kondolar hashtag">#Democracy in school</h5>
    </EndingShareContainer>
  )
}

export default EndingShare
