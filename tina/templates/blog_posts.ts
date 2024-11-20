import type { TinaField } from "tinacms";

export function blogPostsFileds() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      default: 'post',
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
      type: "image",
      name: "card_image",
      label: "Post Image",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true
    },
    {
      type: "string",
      name: "short_description",
      label: "Short Description",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      isBody: true,
    },
    
  ] as TinaField[];
}
