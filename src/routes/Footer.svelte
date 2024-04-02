<script>
    import '$lib/css/theme.css'
    export let copyright = 'Copyright';
</script>

<footer class="site-footer">
    <div class="wrapper">
        <div class="site-footer-inner">
            <div>{copyright}</div>
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