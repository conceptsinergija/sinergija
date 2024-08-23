import type { TinaField } from "tinacms";

export function contactFields() {
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
          type: "string",
          name: "description",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "working_hours_working_days",
          label: "Working Hours (Weekdays)",
        },
        {
          type: "string",
          name: "working_hours_weekend",
          label: "Working Hours (Weekend)",
        }
      ]
    }
  ] as TinaField[];
}
