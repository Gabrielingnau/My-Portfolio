import { ContentContainer, Contente } from './styles'
import { IoCalendarOutline } from 'react-icons/io5'
import { FaArrowRightLong } from "react-icons/fa6";

interface ContentProps {
  year: string
  title: string
  paragraph: string
  link?: string
}

export function Content({ year, title, paragraph, link }: ContentProps) {
  return (
    <ContentContainer>
      <Contente>
        <div className="year">
          <IoCalendarOutline />
          {year}
        </div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <a href={link}>Visitar projeto <FaArrowRightLong size={12}/></a>
      </Contente>
    </ContentContainer>
  )
}
