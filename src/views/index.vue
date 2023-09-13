<template>
	<div>
		<Card title="Product Collection">
			<template #header>
				<Button
					text="Ketentuan Rental"
					btnClass="bg-success-500 light text-success-500 btn-sm" />
			</template>
			<div class="">
				<div class="grid grid-cols-4 gap-4">
					<div v-for="(item, i) in statistics" :key="i">
						<Card bodyClass="pt-4 pb-3 px-4">
							<a href="#">
								<img
									class="rounded-t-lg"
									:src="item.img"
									alt="" />
							</a>
							<div class="p-5">
								<a href="#">
									<h5
										class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
										{{ item.title }}
									</h5>
								</a>
								<p
									class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
									Here are the biggest enterprise technology
									acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
								<div class="w-100">
									<Button
										text="Rental Via Whatsapp"
										style="width: 100%"
										btnClass="bg-success-500 text-white"
										@click="setModal('whatsapp')" />
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</Card>
		<div class="modals">
			<RentModal
				:show="showRentWAModal"
				sizeClass="max-w-5xl"
				@close="setModal('whatsapp')" 
			/>
		</div>
	</div>
</template>

<script setup>
import Card from '@/components/Card';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import RentModal from '@/components/Custom/modal/Rent.vue';
import { ref } from 'vue';
const buttons = [
	{
		title: 'Home',
		icon: 'heroicons-outline:home',
	},
	{
		title: 'Profile',
		icon: 'heroicons-outline:user',
	},
	{
		title: 'Messages',
		icon: 'heroicons-outline:chat-alt-2',
	},
	{
		title: 'Settings',
		icon: 'heroicons-outline:cog',
	},
];

const statistics = ref([
	{
		title: 'Inova Zenix',
		img: 'https://www.bastianrental.com/wp-content/uploads/2023/01/zenixpng.png',
	},
	{
		title: 'Wulling Air',
		img: 'https://www.bastianrental.com/wp-content/uploads/2023/01/air-ev-long-2.png',
	},
	{
		title: 'Suzuki Jimmy',
		img: 'https://www.bastianrental.com/wp-content/uploads/2023/01/Jimny-Green-1.png',
	},
	{
		title: 'RAIZE',
		img: 'https://www.bastianrental.com/wp-content/uploads/2021/06/raize12.png',
	},
	{
		title: 'ALPHARD',
		img: 'https://www.bastianrental.com/wp-content/uploads/2020/01/sewa-mobil-di-bali-alphard.gif',
	},
]);

const showRentWAModal = ref(false);
const setModal = (type) => {
	switch (type) {
		case 'whatsapp':
			showRentWAModal.value = !showRentWAModal.value;
			break;
		default:
			break;
	}
};
import userImg from '@/assets/images/all-img/user.png';
</script>
