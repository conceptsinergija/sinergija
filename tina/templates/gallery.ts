import type { TinaField } from "tinacms";

export function galleryFields() {
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
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "images",
      label: "Images",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.alt || 'No Alt Text', // Display alt text as label
            style: { 
              display: 'flex',
              alignItems: 'center'
            }
          };
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
          ui: {
            previewSrc: (formValues) => formValues.image?.src || "", // Ensure the image src is correctly accessed
          }
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Text",
        },
        {
          type: "boolean",
          name: "show_on_cta",
          label: "Show on CTA",
        }
      ]
    }
  ] as TinaField[];
}
