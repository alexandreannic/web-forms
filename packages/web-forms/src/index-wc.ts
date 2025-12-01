import { defineCustomElement } from 'vue';
import OdkWebFormCE from './components/OdkWebForm.ce.vue';

// import PrimeVue from 'primevue/config';
//
// import resetStyles from './assets/styles/reset.scss?inline';
// import mainStyles from './assets/styles/style.scss?inline';
// import roboto300 from '@fontsource/roboto/300.css?inline';
// import roboto400 from '@fontsource/roboto/400.css?inline';
// import roboto500 from '@fontsource/roboto/500.css?inline';
// import { odkThemePreset } from '@/odk-theme-preset.ts';

const OdkWebFormElement = defineCustomElement(OdkWebFormCE, {
	shadowRoot: false,
	styles: [
		// resetStyles,
		// mainStyles,
		// roboto300,
		// roboto400,
		// roboto500
	],
	configureApp(app) {
		app.config.compilerOptions.isCustomElement = () => true;
		// app.use(PrimeVue, { theme: { preset: odkThemePreset, options: { darkModeSelector: false } } });
	},
});

customElements.define('odk-webform', OdkWebFormElement);

export default OdkWebFormCE;
