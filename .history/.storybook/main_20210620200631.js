module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
     "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-design-assets",
    "storybook-addon-vue-info/lib/register",
    "storybook-vscode-component",
    "storybook-design-token"


  ]
}