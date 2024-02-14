<script>
	let isModalOpen = false;
</script>

<button class="btn modal-button" on:click={() => (isModalOpen = true)}>open modal</button>

<!-- Put this part before </body> tag -->
<!-- 🔵 conditional `modal-open` class if true -->
<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<button class="btn" on:click={() => (isModalOpen = false)}>Yay!</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</div>
