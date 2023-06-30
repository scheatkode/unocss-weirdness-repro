<script lang="ts">
	import t from "$lib/i18n/i18n-svelte";

	import StopclockIcon from "$lib/components/icons/stopclock";
	import TeamworkIcon from "$lib/components/icons/teamwork";
</script>

<section
	class="
		relative
		mx-auto
		flex
		min-h-screen
		max-w-screen-xl
		flex-col
		items-center
		justify-around
		gap-16
		p-12
		md:flex-row
	"
>
	<div class="flex flex-col justify-center gap-2 text-gray-800 md:w-1/2">
		<h2 class="text-secondary-600 text-lg font-bold tracking-wide">
			{$t.landing.sections.re.title()}
		</h2>

		<h3 class="my-4 text-4xl font-bold">
			{$t.landing.sections.re.subtitle()}
		</h3>

		<p class="prose text-xl">
			{$t.landing.sections.re.paragraph()}
		</p>

		<a
			href="#"
			class="
				btn
				btn-secondary
				mb-12
				mt-3
				max-w-fit
				rounded-full
				px-6
			"
		>
			{$t.landing.sections.re.link()}
		</a>

		<div class="flex flex-col gap-5 md:flex-row">
			<div class="flex flex-col gap-2">
				<TeamworkIcon width="48" />

				<h3 class="font-bold">
					{$t.landing.sections.re.description[1].title()}
				</h3>

				<p class="text-gray-600">
					{$t.landing.sections.re.description[1].text()}
				</p>
			</div>

			<div class="flex flex-col gap-2">
				<StopclockIcon width="48" />

				<h3 class="font-bold">
					{$t.landing.sections.re.description[2].title()}
				</h3>

				<p class="text-gray-600">
					{$t.landing.sections.re.description[2].text()}
				</p>
			</div>
		</div>
	</div>
</section>
