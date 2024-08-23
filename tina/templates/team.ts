import type { TinaField } from "tinacms";

export function teamFields() {
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
      type: "boolean",
      name: "published",
      label: "Show this page on the website",
    },
    {
      type: "object",
      name: "our_team",
      label: "Team members",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Full Name",
        },
        {
          type: "boolean",
          name: "show_on_homepage",
          label: "Show on homepage",
        },
        {
          type: "string",
          name: "role",
          label: "Role",
        },
        {
          type: "string",
          name: "description",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          previewSrc: (data) => data.url,
        },
      ]
    }
  ] as TinaField[];
}
