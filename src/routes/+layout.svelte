<script lang="ts">
  import '../app.css';
  import UnderDevelopmentModal from '$lib/UnderDevelopmentModal.svelte';

  let { children } = $props();
</script>

{@render children()}

<UnderDevelopmentModal />
