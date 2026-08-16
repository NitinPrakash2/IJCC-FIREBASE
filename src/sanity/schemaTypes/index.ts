import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { membershipPricing } from './membershipPricing';
import { event } from './event';
import { member } from './member';
import { galleryImage } from './galleryImage';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { contactPage } from './contactPage';
import { newsArticle } from './newsArticle';
import { resourceItem } from './resourceItem';
import { serviceItem } from './serviceItem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    aboutPage,
    contactPage,
    membershipPricing,
    event,
    member,
    galleryImage,
    newsArticle,
    resourceItem,
    serviceItem,
  ],
};
