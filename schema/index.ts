// ./schemas/index.ts

import { sections } from "./sections/index";
import { blockContent } from './blockContent';
import { post } from './post';
import { carousel } from './carousel';
import { page } from './page'


export const schemaTypes = [
  post,
  carousel,
  blockContent,
  page, 
  ...sections,
]