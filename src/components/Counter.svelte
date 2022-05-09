<!-- <script define:vars={{ PUBLIC_API_URL }}> -->

<script>
	import { onMount } from 'svelte'
  export let apiUrl = ''
  let count = ''

	onMount(async () => {
    const response = await fetch(`${apiUrl}/api/counter`)
    const data = await response.json()
    count = data.count
  })
</script>


<div class="counter">
  <strong>Page Views:</strong>
  <span class="{count ? '' : 'loader'}">{ count }</span>
</div>


<style>
.counter {
  margin-top: 40px;
}

.loader {
  @apply ease-linear rounded-full border-8 border-t-8 border-gray-200 w-2 h-2;
  display: inline-block;
  border-top-color: #4F39FA;
  -webkit-animation: spinner 0.5s linear infinite;
  animation: spinner 0.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>