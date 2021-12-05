import 'styled-components';

type themeTitle = 'dark' | 'light';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: themeTitle;

    colors: {
      primary: string;
      secondary: string;

      background: string;

      white: string;
      gray: string;
    };

    font: {
      primary: string;
      secondary: string;
    };
  }
}
