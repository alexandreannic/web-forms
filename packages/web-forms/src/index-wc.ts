import { defineCustomElement } from 'vue';
import OdkWebFormCE from './components/OdkWebForm.vue';
import PrimeVue from 'primevue/config';
import { odkThemePreset } from '@/odk-theme-preset.ts';

const OdkWebFormElement = defineCustomElement(OdkWebFormCE, {
	shadowRoot: false,
	styles: [],
	configureApp(app) {
		app.config.compilerOptions.isCustomElement = () => true;
		app.use(PrimeVue, { theme: { preset: odkThemePreset, options: { darkModeSelector: false } } });
	},
});

customElements.define('odk-webform', OdkWebFormElement);

export default OdkWebFormCE;
