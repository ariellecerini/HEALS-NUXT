
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }// .storybook/preview.js

import { themes } from '@storybook/theming';

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.dark,
  },
};