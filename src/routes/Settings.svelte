<script>
    import { hue, hue_step, theme, error_tolerance } from '$lib/stores'

    const themes = ['light', 'dark', 'gray'];
</script>


<h3>Settings</h3>

<div class="container">
    <span>Color theme</span>
    <select bind:value={$theme}>
        {#each themes as th}
            <option>{th}</option>
        {/each}
    </select>

    <span>Hue</span>
    <input type="number" bind:value={$hue} min="0" max="360" />
    
    <span>Hue step size</span>
    <input type="number" bind:value={$hue_step} min="1" max="60" />

    <span>Error tolerance</span>
    <input type="number" bind:value={$error_tolerance} min="1" max="60" />
</div>

<style>
    /* https://css-tricks.com/snippets/css/complete-guide-grid/ */
    .container {
        display: grid;
        grid-template-columns: minmax(90px, 1fr) 1fr;
        gap: 10px;
    }

    input {
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        padding: 3px;
        color: var(--text-color);
        width: 100%;
    }

    select {
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        width: 100%;
    }
</style>