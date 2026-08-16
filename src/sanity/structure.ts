import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      // Global Settings
      S.listItem()
        .title('Global Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Global Site Settings')
        ),

      S.divider(),

      // Pages Grouping
      S.listItem()
        .title('Static Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home Page')
                ),
              S.listItem()
                .title('About Us Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('About Us Page')
                ),
              S.listItem()
                .title('Contact Page')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .title('Contact Page')
                ),
            ])
        ),

      S.divider(),

      // Content Collections
      S.documentTypeListItem('serviceItem').title('Services'),
      S.documentTypeListItem('newsArticle').title('News Articles'),
      S.documentTypeListItem('resourceItem').title('Resources'),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('member').title('Team & Members'),
      S.documentTypeListItem('galleryImage').title('Gallery Images'),
      S.documentTypeListItem('membershipPricing').title('Membership Prices'),
    ]);
