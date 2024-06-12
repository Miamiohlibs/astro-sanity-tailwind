// ./schemas/index.ts

import {promotionType} from './promotionType'
import {formType} from './formType'
import {heroType} from './heroType'
import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'
import blockContent from './blockContent';
import post from './post';
import carousel from './carousel';

export const schemaTypes = [
  pageType,
  heroType,
  promotionType,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  videoType,
  post,
  carousel,
  blockContent,
]