export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [

    {
      name: "diplomaImage",
      title: "Diploma Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "certificateName",
      title: "Certificate Name",
      type: "string",
    },
 
    {
      name: "yearStarted",
      title: "yearStarted",
      type: "number",
      min: "1960",
      max:"2099",
      step:"1",
    },

    {
      name: "dateEnded",
      title: "DateEnded",
      type: "number",
      min: "1960",
      max:"2099",
      step:"1",
    },

    {
      name: "linkToCetrificate",
      title: "LinkToCertificate",
      type: "url",
    },
  ],
};

  