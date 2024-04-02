<script>
    import { createEventDispatcher } from "svelte";
    import { base } from '$app/paths';
    import "$lib/css/theme.css";

    export let title = "Title";

    const dispatch = createEventDispatcher();
    function settingsClicked() {
        dispatch("toggleSettings");
    }
</script>

<header class="site-header">
    <div class="wrapper">
        <div class="site-header-inner">
            <div class="site-brand">
                <a class="site-brand-inner" rel="author" href="{base}/">
                    <span class="text-item">{title}</span>
                </a>
            </div>
            <nav class="site-nav">
                <a href="{base}/">HOME</a>
                <button on:click={settingsClicked}>
                    <span style="display: inline-block; vertical-align: middle;">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            viewBox="0 0 512 512"
                            ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                                /></svg
                        >
                    </span>
                    <span>SETTINGS</span>
                </button>
            </nav>
        </div>
    </div>
</header>

<style>
    .site-header {
        align-self: flex-start;
        height: var(--header-height);
        background-color: var(--header-background-color);
        width: 100%;
        box-shadow: 0 1px 0 0 var(--shadow-color);
    }

    .wrapper {
        margin: 0 60px;
        padding: 0px;
        max-width: 100%;
        transition: 0.2s margin;
    }

    .site-header-inner {
        display: block flex;
        position: relative;
        font-size: calc(var(--base-font-size) * 1.125);
    }

    .site-brand {
        line-height: var(--header-height);
        margin-right: 50px;
    }

    .site-nav {
        line-height: var(--header-height);
        position: absolute;
        right: 0;
        top: 0;
    }

    a {
        color: var(--header-text-color);
    }

    button {
        font-size: calc(var(--base-font-size) * 1.125);
        line-height: calc(var(--base-line-height) * 1.2);
        margin-left: 25px;
        align-items: center;
        fill: var(--header-text-color);
        color: var(--header-text-color);
    }

    span {
        color: var(--header-text-color);
    }

</style>
