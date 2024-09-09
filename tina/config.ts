import { defineConfig } from "tinacms";
import { homepageFields } from "./templates/homepage";
import { aboutFields } from "./templates/about";
import { membershipFields } from "./templates/membership";
import { vaucherFields } from "./templates/vaucher";
import { galleryFields } from "./templates/gallery";
import { contactFields } from "./templates/contact";
import { faqFields } from "./templates/faq";
import { teamFields } from "./templates/team";
import { singleConceptFields } from "./templates/single_concept";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: 'af08d1e5-6ebb-450e-bbb4-df65dd3aed5f',
  token: 'bdd6e0f796f1231dc9f63c72d3f289c74b0404d3',

  build: {
    outputFolder: "admin",
    publicFolder: "./",
    basePath: process.env.BASE_PATH || '',
  },
  media: {
    tina: {
      mediaRoot: "/assets/uploads",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Stranice',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'homepage',
            label: 'Homepage',
            fields: homepageFields()
          },
          {
            name: 'about',
            label: 'About',
            fields: aboutFields()
          },
          {
            name: 'membership',
            label: 'Membership',
            fields: membershipFields()
          },
          {
            name: 'vaucher',
            label: 'Vaucher',
            fields: vaucherFields()
          },
          {
            name: 'gallery',
            label: 'Gallery',
            fields: galleryFields()
          },
          {
            name: 'contact',
            label: 'Contact',
            fields: contactFields()
          },
          {
            name: 'faq',
            label: 'FAQ',
            fields: faqFields()
          },
          {
            name: 'team',
            label: 'Team',
            fields: teamFields()
          },
          {
            name: 'default',
            label: 'Default',
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ]
          }
        ]
      },
      {
        label: 'Koncepti',
        name: 'concepts',
        path: 'concepts',
        format: 'md',
        templates: [
          {
            name: 'single_concept',
            label: 'Concept',
            fields: singleConceptFields()
          },
        ]
      },
    ],
  }
});
