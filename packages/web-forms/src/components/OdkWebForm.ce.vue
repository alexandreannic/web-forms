<script setup lang="ts">
import { createApp, getCurrentInstance } from 'vue';
import { webFormsPlugin } from '../web-forms-plugin';
import OdkWebForm from './OdkWebForm.vue';
import type { OdkWebFormsProps } from '@/components/OdkWebForm.vue';

defineProps<OdkWebFormsProps>();
defineEmits(['submit', 'submit-chunked']);

const app = createApp({});
app.use(webFormsPlugin);
const inst = getCurrentInstance();
Object.assign(inst!.appContext, app._context);
</script>

<template>
	<OdkWebForm
		ref="odkWebForm"
		:form-xml="formXml"
		:fetch-form-attachment="fetchFormAttachment"
		:missing-resource-behavior="missingResourceBehavior"
		:submission-max-size="submissionMaxSize"
		:edit-instance="editInstance"
		@submit="$emit('submit', $event)"
		@submit-chunked="$emit('submit-chunked', $event)"
	/>
</template>
