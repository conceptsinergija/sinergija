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

  clientId: 'b49aa529-0008-48f4-b07e-5cac8ce76fd0',
  token: '73db3c1d6fb62aeb12f05212aa2a0e0d57637e33',

  build: {
    outputFolder: "admin",
    publicFolder: "./",
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
        label: 'Pages',
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
          }
        ]
      },
      {
        label: 'Concepts',
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
