export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Name of school",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "degree",
      title: "Degree",
      type: "text",
    },
  
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],
};

  