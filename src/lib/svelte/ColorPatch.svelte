<script>
    import chroma from 'chroma-js';

    export let color = "white";
    export let text_color = "gray";

    $: color_hex = chroma(color).hex();
    $: text_color = chroma(color_hex).get('hcl.l') > 40 ? chroma(color_hex).darken(1).hex() : chroma(color_hex).brighten(1).hex();

    /*
    {chroma(color_hex).get('hcl.h').toFixed(0)}<br>
    {chroma(color_hex).get('hcl.c').toFixed(0)}<br>
    {chroma(color_hex).get('hcl.l').toFixed(0)}
    */
</script>

<button
    on:click
    class="color-patch"
    style="background-color: {color_hex}; color: {text_color};">
    {color_hex}
</button>

<style>
    .color-patch {
        width: 45px;
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        font-size: 6pt;
        font-family: 'Roboto', monospace;
        user-select: none;
        border: none;
        border-radius: 2px;
        background-color: #fff; /* Initial color */
        cursor: pointer;
    }
</style>
