import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const rootStyles = css`
    /*
     * Colors
     */
    --c-black: #000;
    --c-white: #fff;
    --c-salesforce-blue: #00a1e0;
    --c-blue-400: #006dcc;
    --c-blue-700: #005fb2;
    --c-grey-blue-900: #222;
    --c-grey-blue-800: #102f5e;
    --c-grey-blue-700: #16325c;
    --c-grey-blue-900: #032e61;
    --c-teal-300: #6dc5d1;
    --c-teal-500: #39837d;
    --c-grey-blue-600: #255e9e;
    --c-blue-grey-400: #54698d;
    --c-blue-grey-300: #cfd9e8;
    --c-blue-grey-200: #d4ddea;
    --c-blue-grey-100: #f4f6f9;
    --c-grey-700: #3e3e3c;
    --c-grey-500: #988f88;
    --c-grey-400: #59575c;
    --c-grey-300: #c0b9b5;
    --c-grey-250: #c1b9b4;
    --c-grey-225: #ededed;
    --c-grey-200: #f4f6f9;
    --c-grey-100: #fafafa;
    --c-grey-disabled: #f4f4f4;
    --c-red-error: #d70404;
    --c-orange-700: #bf431b;
    --c-orange-500: #d8792d;
    --c-orange-400: #fd9a48;
    --c-text-heading: #16325c;
    --c-text-main: #54698d;
    --c-text-nav: #102f5e;
    --c-link-hover: #006dcc;
    --c-footer-bkgd: #032e61;
    --c-header-text-sf: #215ca0;
    --c-header-bkgd-sf: #f4f4f4;
    --c-header-text-hover-sf: #222;
    --c-header-text-hover-2-sf: #184476;
    --c-denim: #1580da;
    --c-bright-grey: #59595c;
    
    /*
     * Type
     */
	--font-weight-hairline: 100;
	--font-weight-thin: 200;
	--font-weight-light: 300;
	--font-weight-normal: 400;
	--font-weight-medium: 500;
	--font-weight-semibold: 600;
	--font-weight-bold: 700;
	--font-weight-xbold: 800;
	--font-weight-black: 900;
	--small-heading-1-font-size: 40px;
	--small-heading-1-line-height: 53px;
	--heading-1-font-size: 44px;
	--heading-1-line-height: 48px;
	--small-heading-2-font-size: 36px;
	--small-heading-2-line-height: 48px;
	--heading-2-font-size: 38px;
	--heading-2-line-height: 53px;
	--small-heading-3-font-size: 30px;
	--small-heading-3-line-height: 40px;
	--heading-3-font-size: 32px;
	--heading-3-line-height: 40px;
	--small-heading-4-font-size: 24px;
	--small-heading-4-line-height: 32px;
	--heading-4-font-size: 26px;
	--heading-4-line-height: 35px;
	--small-heading-5-font-size: 20px;
	--small-heading-5-line-height: 27px;
	--heading-5-font-size: 22px;
	--heading-5-line-height: 29px;
	--small-heading-6-font-size: 18px;
	--small-heading-6-line-height: 24px;
	--heading-6-font-size: 18px;
	--heading-6-line-height: 24px;
	--overline-font-size: 16px;
	--overline-line-height: 26px;
	--overline-alt-font-size: 15px;
	--overline-alt-line-height: 26px;
	--body-font-size: 18px;
	--body-line-height: 26px;
	--body-alt-font-size: 16px;
	--body-alt-line-height: 26px;
	--body-small-font-size: 13px;
    --body-small-line-height: 20px;
    
    /*
     * Spacing
     */
    --side-padding: 1.875rem;
	--base-spacing: 0.5rem;
	--spacing-pt75: 0.75rem;
	--spacing-1: 1rem;
	--spacing-1pt5: 1.5rem;
	--spacing-2: 2rem;
	--spacing-2pt5: 2.5rem;
	--spacing-3: 3rem;
	--spacing-4: 4rem;
	--spacing-5: 5rem;
    --spacing-6: 6rem;

    /*
     * Miscelaneous
     */
    --border-radius: 4px;
	--transition-speed: 0.3s;
`;

export const bodyStyles = css`    
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 :root {
     ${rootStyles}
 }

 body {
   ${bodyStyles}
 }
`;
