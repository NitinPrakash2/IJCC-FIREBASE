import { groq } from 'next-sanity';

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    phoneNumber,
    address
  }
`;

export const MEMBERSHIP_PRICING_QUERY = groq`
  *[_type == "membershipPricing"] | order(price asc) {
    _id,
    tierName,
    price,
    currency,
    duration,
    benefits
  }
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    registrationLink,
    "imageUrl": image.asset->url
  }
`;

export const MEMBERS_QUERY = groq`
  *[_type == "member"] | order(coalesce(order, 99) asc, name asc) {
    _id,
    name,
    role,
    category,
    bio,
    order,
    "imageUrl": image.asset->url
  }
`;

export const GALLERY_QUERY = groq`
  *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
`;

export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.asset->url,
    welcomeMessage
  }
`;

export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPage"][0] {
    pageTitle,
    introduction,
    mission,
    history,
    "bannerImageUrl": bannerImage.asset->url
  }
`;

export const CONTACT_PAGE_QUERY = groq`
  *[_type == "contactPage"][0] {
    pageTitle,
    introduction,
    corporateOfficeTitle,
    corporateOfficeAddress,
    branchOfficeTitle,
    branchOfficeAddress,
    japanOfficeTitle,
    japanOfficeAddress,
    phoneBranch,
    phoneJapan,
    faqTitle,
    faqs,
    mapCoordinates
  }
`;

export const NEWS_ARTICLES_QUERY = groq`
  *[_type == "newsArticle"] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    publishDate,
    "featuredImageUrl": featuredImage.asset->url,
    excerpt,
    content
  }
`;

export const RESOURCES_QUERY = groq`
  *[_type == "resourceItem"] | order(_createdAt desc) {
    _id,
    title,
    category,
    description,
    "fileUrl": file.asset->url,
    externalLink
  }
`;

export const SERVICES_QUERY = groq`
  *[_type == "serviceItem"] | order(coalesce(order, 99) asc) {
    _id,
    title,
    "slug": slug.current,
    iconName,
    shortDescription,
    detailedContent,
    order
  }
`;
