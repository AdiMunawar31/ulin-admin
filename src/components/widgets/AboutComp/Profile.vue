<template>
	<div class='bg-gray-900 border border-gray-900 shadow-lg rounded p-4 m-0 mt-5 md:m-4'>
		<div class='flex-none sm:flex'>
			<div class='relative h-32 w-32 sm:mb-0 mb-3'>
				<img
					:src='images'
					class='w-32 h-32 object-cover rounded-2xl'
				/>
			</div>
			<div class='flex-auto sm:ml-5 justify-evenly'>
				<div class='flex items-center justify-between sm:mt-2'>
					<div class='flex items-center'>
						<div class='flex flex-col'>
							<div
								class='w-full flex-none text-lg text-gray-200 font-bold leading-none'
							>{{ name }}</div>
							<div class='flex-auto text-gray-400 my-1'>
								<span class='mr-3'>{{ skill }}</span>
								<span class='mr-3 border-r border-gray-600 max-h-0'></span>
								<span>{{ place }}, IND</span>
							</div>
						</div>
					</div>
				</div>
				<div class='flex flex-row items-center'>
					<div class='flex'>
						<i class='fas fa-star text-yellow-500 mr-1'></i>
						<i class='fas fa-star text-yellow-500 mr-1'></i>
						<i class='fas fa-star text-yellow-500 mr-1'></i>
						<i class='fas fa-star text-yellow-500 mr-1'></i>
						<i class='far fa-star text-yellow-500'></i>
					</div>
				</div>

				<!-- STATS ------------------------------------------------------------------------------------------------------ -->

				<div class='block md:flex flex-wrap pt-2 text-sm text-gray-400'>
					<div class='flex-1 block md:inline-flex items-start'>
						<i class='fa fa-user-plus mr-2'></i>
						<p class>1.2k Followers</p>
					</div>
					<div class='flex-1 -ml-0 md:-ml-5 block md:inline-flex items-start'>
						<i class='fas fa-folder-open mr-2'></i>
						<p>26 Repository</p>
					</div>
					<button
						class='bg-yellow-500 hover:bg-yellow-400 px-5 mt-5 ml-0 md:ml-3 py-2 md:py-1 md:mt-0 text-xs text-white rounded'
					>FOLLOW</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: String,
			default: "",
		},
		name: {
			type: String,
			default: "",
		},
		skill: {
			type: String,
			default: "",
		},
		place: {
			type: String,
			default: "",
		},
	},
};
</script>
