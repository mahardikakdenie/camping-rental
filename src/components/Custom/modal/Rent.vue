<template>
	<Modal
		title="Login Form Modal"
		label="Login Form"
		labelClass="btn-outline-dark"
        :activeModal="show"
        @close="close"
		ref="modal1">
		<div class="text-base text-slate-600 dark:text-slate-300">
			<Textinput
                v-for="i in 4"
                :key="i"
                class="mt-4"
				label="Email"
				type="email"
				placeholder="Type your email"
				name="emil"
            />
		</div>
		<template v-slot:footer>
			<Button
				text="Close"
				btnClass="btn-outline-dark "
				@click="close" 
            />
			<Button
				text="Rent"
				btnClass="btn-dark "
				@click="$refs.modal1.closeModal()" />
		</template>
	</Modal>
</template>

<script setup>
import Button from '@/components/Button';
import Textinput from "@/components/Textinput";
import Modal from '@/components/Modal';

defineProps({
    show: {
        type: Boolean,
        default: () => false
    }
})
const emit = defineEmits(['close']);

const close = () => emit('close');
</script>

<style></style>
