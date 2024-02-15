<script lang="ts">
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let message: string;
</script>

<Html lang="en">
	<Text>
		Mesasage {message}!
	</Text>
	<Hr />
</Html>
