<script>
    import '$lib/css/theme.css'
    export let copyright = 'Created by <a href="https://leitte.github.io/color-palette/">Heike Leitte</a> using <a href="https://svelte.dev">svelte</a> and <a href="https://gka.github.io/chroma.js/">chroma-js</a>. Source code available on <a href="https://github.com/leitte/color-palette">Github</a>.';
</script>

<footer class="site-footer">
    <div class="wrapper">
        <div class="site-footer-inner">
            <div>{@html copyright}</div>
        </div>
    </div>
</footer>

<style>
    .site-footer {
        color: var(--footer-text-color);
        background-color: var(--footer-background-color);
        text-align: left;
        box-shadow: 0 0 0 1px var(--shadow-color);
    }

    .site-footer .site-footer-inner {
        padding: calc(var(--spacing-unit) * 1.8) 0;
    }

    
</style>