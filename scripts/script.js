// import * as util from './utils.js'
import {
  faqLabelClickEvent1,
  faqLabelClickEvent2,
  observeSections
} from './utils.js'

const faqQuestionLabels = document.querySelectorAll('.faq__question');

faqQuestionLabels?.forEach(faqLabelClickEvent1);

const sectionElements = document.querySelectorAll('.section');
observeSections(sectionElements);