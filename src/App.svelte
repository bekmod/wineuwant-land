<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './routes/home/Home.svelte';
  import AboutUs from './routes/about/About.svelte';
  import ContactUs from './routes/contactus/Contact.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/about-us">
    <AboutUs />
  </Route>
  <Route path="/contact-us">
    <ContactUs />
  </Route>
</Router>
