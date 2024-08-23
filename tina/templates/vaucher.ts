

import type { TinaField } from "tinacms";
export function vaucherFields() {
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
      type: "image",
      name: "image",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "vaucher_gift_title",
      label: "Gift Vaucher Title",
    },
    {
      type: "string",
      name: "vaucher_gift_text",
      label: "Gift Vaucher Text",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "vaucher_gift_button",
      label: "Open Modal Button Text",
    },
    {
      type: "object",
      name: "vaucher_modal",
      label: "Vaucher Popup",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "image",
          label: "Background Image",
        },
        {
          type: "object",
          name: 'types_of_training',
          label: 'Types of Training',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.training}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "training",
              label: "Type of Training",
            },
          ]
        },
        {
          type: "object",
          name: 'duration',
          label: 'Duration',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.time}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "time",
              label: "Time",
            },
          ]
        }
      ]
    },
    {
      type: "string",
      name: "vaucher_companies_title",
      label: "Offer for companies Title",
    },
    {
      type: "string",
      name: "vaucher_companies_text",
      label: "Offer for companies Text",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "vaucher_companies_email",
      label: "Offer for companies Email",
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
  ] as TinaField[];
}