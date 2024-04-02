<script>
    import chroma from "chroma-js";
    import { createEventDispatcher } from "svelte";
    import Icon from "./Icon.svelte";

    export let color = "white";
    export let id = NaN;
    let color_annotation = "white";

    $: {
        const ccolor = chroma(color);
        color_annotation =
            ccolor.get("hcl.l") < 50
                ? ccolor.brighten(1.5).hex()
                : ccolor.darken(1).hex();
    }

    const dispatch = createEventDispatcher();

    function moveLeft() {
        dispatch("moveLeft", { id: id });
    }

    function moveRight() {
        dispatch("moveRight", { id: id });
    }

    function deleteColor() {
        dispatch("deleteColor", { id: id });
    }
</script>

<div class="palette-item" style:background-color={color}>
    <div class="control">
        {#each [{'func': moveLeft, 'icon': "arrow-left"},{'func': moveRight, 'icon': "arrow-right"},{'func': deleteColor, 'icon': "delete"}] as x }
            <button on:click={x.func} class="button">
                <Icon name={x.icon} class="icon" width="13px" color={color_annotation}/>
            </button>       
        {/each}
    </div>
    <div class="spacer"></div>
    <span style:color={color_annotation}>{color}</span>
</div>

<style>
    .palette-item {
        width: 5em;
        height: 5em;
        margin: 2px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; /* Distributes space evenly between buttons */
    }

    .control {
        display: flex;
        gap: 7px;
    }

    .button {
        flex-grow: 1;
        background: none;
        border: none;
        padding: 6px 0;
        cursor: pointer;
    }
</style>
