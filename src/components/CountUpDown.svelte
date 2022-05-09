<!--
Simple example of an interactive counter widget
@see https://github.com/withastro/astro/blob/main/examples/framework-multiple/src/components/SvelteCounter.svelte
 -->
<script>
  let children;
  let count = 0;
  function add() {
		count += 1;
	}
  function subtract() {
		count -= 1;
	}
</script>

<div class="counter">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>
<div class="counter-message">
  <slot />
</div>
