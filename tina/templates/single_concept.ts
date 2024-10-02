import type { TinaField } from "tinacms";

export function singleConceptFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "concept_card_image",
      label: "Concept Card Image",
    },
    {
      type: "boolean",
      name: "show_on_homepage",
      label: "Show on Homepage",
    },
    {
      type: "string",
      name: "short_description",
      label: "Short Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "boolean",
      name: "show_youtube_video",
      label: "Show Youtube Video",
    },
    {
      type: "string",
      name: "youtube_src",
      label: "Youtube Video",
    },
    {
      type: "boolean",
      name: "show_gallery",
      label: "Show Gallery",
    },
    {
      type: "object",
      name: "gallery",
      label: "Gallery",
      list: true,
      ui: {
        previewSrc: (formValues) => formValues.image?.src || "", 
        itemProps: (item) => {
          return { label: `${item?.alt}`}
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Text",
        },
      ],
    },
    {
      type: "boolean",
      name: "show_weekly_program",
      label: "Show Weekly Program",
    },
    {
      type: "string",
      name: 'weekly_program_title',
      label: 'Weekly Program Title',
    },
    {
      type: "image",
      name: "weekly_program",
      label: "Weekly Program Image",
    },
    {
      type: "rich-text",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "our_mission",
      label: "Our Mission",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        
      ]
    },
    {
      type: "boolean",
      name: "show_training_time",
      label: "Prikaz sekcija Termina",
    },
    {
      type: "string",
      name: 'training_time_title',
      label: 'Naslov sekcije Termina',
    },
    {
      type: "image",
      name: "training_time_image",
      label: "Slika sekcije Termina",
    },
    {
      type: "object",
      name: "prices",
      label: "Pricelist",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.service}: ${item?.price}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "service",
          label: "Service",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
        },
      ]
    },
    {
      type: "string",
      name: "rule_book_title",
      label: "Rule Book Title",
    },
    {
      type: "rich-text",
      name: "rule_book",
      label: "Rule Book",
    },
  ] as TinaField[];
}