

import type { TinaField } from "tinacms";
export function membershipFields() {
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
      name: "title",
      label: "Meta Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
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
      name: "pricelist",
      label: "Pricing",
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
          type: "object",
          name: "services",
          label: "Services",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.service} - ${item?.price}`}
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
            }
          ]
        },
        {
          type: "string",
          name: "description",
          label: "Additional Information",
        }
      ]
    },
    {
      type: "object",
      name: "discounts",
      label: "Discounts",
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
          type: "object",
          name: "services",
          label: "Discounted Services",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.service}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "service",
              label: "Service",
            }
          ]
        },
        {
          type: "string",
          name: "description",
          label: "Additional Information"
        }
      ]
    },
    {
      type: "object",
      name: "loyalty",
      label: "Loaylty Program", 
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
          type: "object",
          name: "services",
          label: "Loaylty Programs",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.time} - ${item?.card} - ${item?.discount}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "time",
              label: "Time",
            },
            {
              type: "string",
              name: "membership",
              label: "Membership fees",
            },
            {
              type: "string",
              name: "card",
              label: "Membership Card",
            },
            {
              type: "string",
              name: "discount",
              label: "Discount",
            },
          ]
        },
        {
          type: "object",
          name: "descriptions",
          label: "Additional Information",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.description}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "description",
              label: "Description",
            }
          ]
        }
      ]
    },
    {
      type: "string",
      name: "rules",
      label: "Ruels Title",
    },
    {
      type: "rich-text",
      name: "rules_text",
      label: "Rules Text",
    }
  ] as TinaField[];
}