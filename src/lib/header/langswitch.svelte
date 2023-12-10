<script>
	import { locale } from 'svelte-i18n';
  
	function setLanguage(lang) {
	  $locale = lang;
	}
  </script>
  
  <div>
	<button on:click={() => setLanguage('en')} class="language-button">English</button>
	<button on:click={() => setLanguage('ar')} class="language-button">العربية</button>
	<!-- Add more buttons for other languages -->
  </div>
  
  <style>
	.language-button {
	  margin: 5px;
	  padding: 5px;
	  cursor: pointer;
	}
  </style>
  