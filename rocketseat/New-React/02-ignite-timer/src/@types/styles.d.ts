import "styled-components";
import { defaultTheme } from "../components/styles/themes/default";

type themeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
