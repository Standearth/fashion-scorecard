<script>
    import { page } from '@app/stores';
    $: {
      if (typeof gtag !== "undefined"){
        gtag("config", "G-8C7YDS4311", {
          page_path: $page.path
        });
      }
    }
  </script>