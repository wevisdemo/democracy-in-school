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
  padding: 10px 10px 120px 10px;

  .text-wrapper {
    width: 40%;
    z-index: 20;
    margin-top: 108px;
    text-align: center;

    @media (max-width: 420px) {
      max-width: 288px;
      width: 100%;
      margin-top: 140px;
    }

    .text-description {
      margin-top: 10px;
    }
  }

  .order-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .wrap-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width: 420px) {
        order: 2;
      }

      .dropdown-wrapper {
        margin-top: 30px;
        width: 100%;
        max-width: 324px;
      }

      .share-og-image {
        max-width: 828px;
        margin-top: 20px;

        @media (max-width: 1024px) {
          max-width: 300px;
        }
      }
    }
    .wrap-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width: 420px) {
        order: 1;
      }

      .share-social-wrapper {
        margin-top: 48px;

        @media (max-width: 420px) {
          margin-top: 28px;
        }
      }

      .hashtag {
        margin-top: 40px;

        @media (max-width: 420px) {
          width: 176px;
          margin-top: 24px;
        }
      }
    }
  }
`

const mockOptions: IDropdownOption[] = ending_data.shares.map((d) => {
  return { label: d.topic, value: d.id }
})

const EndingShare = () => {
  const [currShare, setCurrShare] = useState<IEndingShare>(ending_data.shares[0])
  const [shareUrl, setShareUrl] = useState<string>('')
  const onSelectOption = (option: IDropdownOption) => {
    const selectedShare = ending_data.shares.find((s) => s.id === option.value) || ending_data.shares[0]
    setCurrShare(selectedShare)
    setShareUrl(`${process.env.NEXT_PUBLIC_BASE_URL}${selectedShare.share_url}`)
  }

  return (
    <EndingShareContainer>
      <div className="text-wrapper">
        <h6 className="wv-h6 wv-font-kondolar ">แชร์ / ชวนเพื่อนมาเล่นควิซนี้!</h6>
        <p className="wv-h6 wv-font-kondolar ">สร้างสังคมประชาธิปไตย เริ่มจากการเคารพความคิดเห็นที่ต่างกัน</p>
        <p className="wv-b2 font-plexsans text-description">
          เราได้ร่วมแสดงความเห็นเพื่อสร้างสังคมประชาธิปไตย ด้วยการเคารพความเห็นต่างด้วยกัน
        </p>
      </div>
      <div className="order-wrapper">
        <div className="wrap-1">
          <div className="dropdown-wrapper">
            <Dropdown
              onSelect={onSelectOption}
              placeholder="เลือกหัวข้อ"
              options={mockOptions}
              backgroundColor="#ffeb78"
            />
          </div>
          <img className="share-og-image" src={currShare.og_image_src} alt="og-image" />
        </div>
        <div className="wrap-2">
          <div className="share-social-wrapper font-plexsans">
            <WvSharer url={shareUrl} />
          </div>
          <h5 className="wv-h5 wv-font-kondolar hashtag">#Democracy in school</h5>
        </div>
      </div>
    </EndingShareContainer>
  )
}

export default EndingShare
