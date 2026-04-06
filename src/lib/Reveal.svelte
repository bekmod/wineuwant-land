<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let {
    children,
    delay = 0,
    y = 30,
    duration = 700,
    class: className = '',
  } = $props();

  let isVisible = $state(false);
  let element: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          observer.disconnect(); // Animate only once per page load
        }
      },
      { threshold: 0.1 }, // Fire when 10% of the element is visible
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<div bind:this={element} class={className}>
  {#if isVisible}
    <div in:fly={{ y, duration, delay, opacity: 0 }} class="h-full w-full">
      {@render children()}
    </div>
  {:else}
    <!-- Hold the structural space to prevent layout shifts before render -->
    <div class="h-full w-full opacity-0"></div>
  {/if}
</div>
