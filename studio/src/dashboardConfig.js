export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623839cbbf02555870fe7931",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-abup9p7y",
                  apiId: "7981daa0-b114-40b1-8203-8a722ab16e1f",
                },
                {
                  buildHookId: "623839cc1ce5765e26865b93",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-vkigo3y7",
                  apiId: "6b7566ee-0b13-4183-89eb-0be440bcfb99",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ijayasurya/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-vkigo3y7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
