<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  let {
    children,
    delay = 600,
    duration = 1500,
    class: className = '',
  } = $props();

  let isVisible = $state(false);
  let element: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  });

  // Custom transition combining opacity, scale, and rotation
  function growReveal(
    node: HTMLElement,
    { delay, duration }: { delay: number; duration: number },
  ) {
    return {
      delay,
      duration,
      easing: cubicOut,
      css: (t: number) => `
        opacity: ${t};
        transform: scale(${0.5 + 0.5 * t}) rotate(${-45 + 45 * t}deg);
        transform-origin: center center;
      `,
    };
  }
</script>

<div bind:this={element} class={className}>
  {#if isVisible}
    <div in:growReveal={{ duration, delay }} class="h-full w-full">
      {@render children()}
    </div>
  {:else}
    <div class="h-full w-full opacity-0"></div>
  {/if}
</div>
