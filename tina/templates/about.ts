

import type { TinaField } from "tinacms";
export function aboutFields() {
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
      type: "object",
      name: "secitons",
      label: "Sections",
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
          type: 'rich-text',
          name: 'text',
          label: 'Text',
        },
        {
          type: "object",
          name: "values",
          label: "Values",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.value}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "value",
              label: "Value",
            },
            {
              type: "image",
              name: "image",
              label: "Image",
            },
            {
              type: "object",
              name: "sub_values",
              label: "Sub Values",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: `${item?.value}`}
                },
              },
              fields: [
                {
                  type: "string",
                  name: "value",
                  label: "Value",
                },
              ]
            },
          ]
        },
        {
          type: "rich-text",
          name: "additiona_text",
          label: "Additiona Text",
        }
      ]
    }
  ] as TinaField[];
}