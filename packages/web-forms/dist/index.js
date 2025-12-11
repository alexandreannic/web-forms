import { P as e, o } from "./OdkWebForm-UouUUrWE.js";
import { O as p, a as h } from "./OdkWebForm-UouUUrWE.js";
import "vue";
const i = `*,
::before,
::after {
	box-sizing: inherit;
	-webkit-tap-highlight-color: transparent;
}

html {
	font-size: 16px !important;
}

body {
	all: revert;
	font-family: Roboto, sans-serif !important;
	font-size: 1rem !important;
	line-height: 1.15rem !important;
	height: fit-content !important;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-webkit-text-size-adjust: 100%;
	tab-size: 4;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
	font-weight: bolder;
	line-height: 1.15;
}

span,
label {
	font-weight: inherit;
}

label {
	margin: 0 !important;
}

label,
.hint {
	p {
		margin: 0;
		margin-bottom: 1rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
}

code,
kbd,
samp,
pre {
	font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
	font-size: 1rem;
	font-weight: normal;
}

small {
	font-size: 80%;
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-size: inherit;
	font-weight: normal;
	line-height: inherit;
	border: none;
	background: none;
	appearance: none;
}

progress {
	vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

[type='search'] {
	outline-offset: -2px;
}

::-webkit-search-decoration {
	-webkit-appearance: none;
}

summary {
	display: list-item;
}

:focus-visible {
	outline: 1px solid #3e9fcc;
	outline-offset: 1px;
}
`, s = {
  install(t) {
    const n = document.createElement("style");
    n.textContent = i, document.head.prepend(n), t.use(e, { theme: { preset: o, options: { darkModeSelector: !1 } } });
  }
};
export {
  p as OdkWebForm,
  h as POST_SUBMIT__NEW_INSTANCE,
  s as webFormsPlugin
};
