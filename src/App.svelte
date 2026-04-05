<script>
  import { Router, Route } from 'svelte-routing';

  export let url = '';
</script>

<Router {url}>
  <Route path="/">
    {#await import('./routes/home/Home.svelte') then { default: Home }}
      <Home />
    {/await}
  </Route>

  <Route path="/about-us">
    {#await import('./routes/about/About.svelte') then { default: AboutUs }}
      <AboutUs />
    {/await}
  </Route>

  <Route path="/contact-us">
    {#await import('./routes/contactus/Contact.svelte') then { default: ContactUs }}
      <ContactUs />
    {/await}
  </Route>
</Router>
