<script lang="ts">
  import '../app.css';
  import UnderDevelopmentModal from '$lib/UnderDevelopmentModal.svelte';
  import CookieConsent from '$lib/CookieConsent.svelte';

  let { children } = $props();
</script>

{@render children()}

<UnderDevelopmentModal />
<CookieConsent />
