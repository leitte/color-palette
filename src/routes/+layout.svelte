<script>
    import { slide } from 'svelte/transition';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Settings from './Settings.svelte';
    import { theme } from "$lib/stores";
    import { base } from '$app/paths';
    import "$lib/css/theme.css";

    export let title = "Color Palette";

    let showSettings = false;
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/theme/{$theme}-theme.css" />
</svelte:head>


<Header title={title} on:toggleSettings={() => {showSettings = !showSettings;}}/>

<main class="page-content" aria-label="Content" style:display="block">
    <div class="wrapper">
        <div class="framework">
            <section class="main" style:flex-wrap="wrap">
                <slot />
            </section>
            {#if showSettings}
                <section class="sidebar" style:width="200px"
                transition:slide={{axis: 'x'}}>
                    <Settings/>
                </section>
            {/if}
        </div>
    </div>
</main>

<Footer />

<style>
    /**
    * Reset some basic elements
    */
    :global(body, h1, h2, h3, h4, h5, h6,
    p, blockquote, pre, hr,
    dl, dd, ol, ul, figure) {
        margin: 0;
        padding: 0;
    }

    /**
    * Basic styling
    */
    :global(body) {
        font-family: var(--base-font-family);
        font-weight: var(--base-font-weight);
        font-size: var(--base-font-size);
        font-display: swap;
        line-height: var(--base-line-height);
        color: var(--text-color);
        background-color: var(--background-color);
        transition: background-color 0.3s;
        -webkit-text-size-adjust: 100%;
        -webkit-font-feature-settings: "kern" 1;
            -moz-font-feature-settings: "kern" 1;
            -o-font-feature-settings: "kern" 1;
                font-feature-settings: "kern" 1;
        font-kerning: normal;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        transition-duration: var(--base-transition-duration);
    }

    /**
    * Set `margin-bottom` to maintain vertical rhythm
    */
    :global(h1, h2, h3, h4, h5, h6,
    p, blockquote, pre,
    ul, ol, dl, figure) {
        margin-bottom: calc(var(--spacing-unit) / 2);
    }

    /**
    * Headings
    */
    :global(h1, h2, h3, h4, h5, h6) {
        font-weight: calc(var(--base-font-weight) * 1.5);
    }

    /**
    * Links
    */
    :global(a) {
        color: var(--brand-color);
        text-decoration: none;
    }

    :global(a:hover) {
        text-decoration: underline;
    }

    /**
    * Wrapper
    */
    :global(.wrapper) {
        max-width: var(--content-width);
        margin: auto;
        padding-right: var(--spacing-unit);
        padding-left: var(--spacing-unit);
    }

    .page-content {
        flex: 1;
        min-width: 0;
        padding: calc(var(--spacing-unit) * 2) 0;
        padding-top: 72px;
    }

    .framework {
        display: flex;
    }

    .main {
        display: flex;
        flex: 1;
        gap: calc(var(--spacing-unit) * 1.5);
    }

    .sidebar {
        margin-left: 15px;
        padding-left: 8px;
        transition: top 0.2s, display 0.2s;
    }

    :global(button) {
        cursor: pointer;
        border-radius: 5px;
        background-color: rgba(0,0,0,0);
        border: 1px solid var(--border-color);
    }
</style>
