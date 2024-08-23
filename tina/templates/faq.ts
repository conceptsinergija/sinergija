import type { TinaField } from "tinacms";

export function faqFields() {
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
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "categories",
      label: "Categories",
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
          name: "questions",
          label: "Questions",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.question}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
            },
            {
              type: "rich-text",
              name: "answer",
              label: "Answer",
              
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
