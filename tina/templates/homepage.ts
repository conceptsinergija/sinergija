

import type { TinaField } from "tinacms";
export function homepageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "boolean",
      name: "show_loading",
      label: "Show Loading Video",
    },
    {
      type: "string",
      name: "loading_video",
      label: "Loading Video",
    },
    {
      type: "string",
      name: "loading_video_button",
      label: "Loading Video Button Text",
    },
    {
      type: "string",
      name: "our_concept_title",
      label: "Our Concept Title",
    },
    {
      type: "object",
      name: "free_training",
      label: "Free Training",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "button_url",
          label: "Button Url",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        }
      ]
    },
    {
      type: "object",
      name: "membership",
      label: "Membership",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        }
      ]
    },
    {
      type: "object",
      name: "working_hours",
      label: "Working Hours",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "string",
          name: "working_hours_working_days",
          label: "Working Days",
        },
        {
          type: "string",
          name: "working_hours_weekend",
          label: "Weekend",
        }
      ]
    },
  ] as TinaField[];
}