import { Header } from './Header'
import { Hero } from './Hero'
import Logos from './Logos'
import Testimonials from './Testimonials'


// import form from './formType';
// import imageGallery from './imageGalleryType';
// import textWithIllustration from './textWithIllustrationType';
// import video from './videoType';
// import linkComponent from './linkType';
// import richTextBlock from './richTextBlock';



export const sections = {
  'section.header': Header,
  'section.hero': Hero,
  'section.logos': Logos,
  'section.testimonials': Testimonials,
}

export function SectionRenderer(props: { section: any }) {
  const Section = sections[props.section._type]

  if (!Section) {
    return null
  }

  return <Section {...props.section} />
}
