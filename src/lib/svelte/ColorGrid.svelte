<script>
    import chroma from "chroma-js";
    import { createEventDispatcher } from "svelte";
    import { range } from "$lib/math";
    import ColorPatch from "./ColorPatch.svelte";
    import Axis from "./Axis.svelte";

    export let hue = 150;

    export let tolerance = 5;
    const chroma_step = 15; //10
    const light_step = 13;
    const dispatch = createEventDispatcher();

    function maxChroma(h, l) {
        let max_chroma = 0;
        for (let c = 10; c < 150; c++) {
            // convert color to RGB and back to see if it can be correctly represented
            const color = chroma(chroma.hcl(h, c, l).rgb(false)).hcl();
            // alternative for testing if a color can be represented
            // chroma.hcl(h, c, l).clipped()
            if (
                (Math.abs(color[0] - h) > tolerance &&
                    Math.abs(360 - color[0] - h) > tolerance) ||
                Math.abs(color[1] - c) > tolerance ||
                Math.abs(color[2] - l) > tolerance
            ) {
                return max_chroma;
            }
            max_chroma = c;
        }
        return max_chroma;
    }

    function addLastPatch(h, l) {
        const c_max = maxChroma(h, l);
        const c_last = Math.floor(c_max / chroma_step) * chroma_step;
        if (c_max - c_last > 7) {
            return true;
        }
        return false;
    }

    function patchClicked(color) {
        dispatch("colorClicked", { color: color });
    }
</script>

<div class="container">
    <div class="item empty"></div>
    <div class="item x-axis"><Axis left="mute" right="vivid"></Axis></div>
    <div class="item y-axis"><Axis left="light" right="dark"></Axis></div>
    <div class="item patches">
        {#key hue}
            {#key tolerance}
            <div class="color-grid" style:flex-direction="column">
                {#each range(5, 101, light_step) as l, i}
                    <div class="color-grid">
                        {#each range(0, maxChroma(hue, l) + 1, chroma_step) as c, j}
                            <ColorPatch
                                color={chroma.hcl([hue, c, l]).hex()}
                                on:click={patchClicked.bind(
                                    null,
                                    chroma.hcl([hue, c, l]).hex(),
                                )}
                            ></ColorPatch>
                        {/each}
                        {#if addLastPatch(hue, l)}
                            <ColorPatch
                                color={chroma
                                    .hcl([hue, maxChroma(hue, l), l])
                                    .hex()}
                                on:click={patchClicked.bind(
                                    null,
                                    chroma
                                        .hcl([hue, maxChroma(hue, l), l])
                                        .hex(),
                                )}
                            ></ColorPatch>
                        {/if}
                    </div>
                {/each}
            </div>
            {/key}
        {/key}
    </div>
</div>

<style>
    .color-grid {
        display: flex;
        gap: 5px;
    }

    .container {
        display: grid;
        grid-template-columns: 40px auto;
        grid-template-rows: auto auto;
        gap: 15px;
    }
    .item {
        border: 0px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .empty {
        grid-area: 1 / 1 / 2 / 2;
    }
    .x-axis {
        grid-area: 1 / 2 / 2 / 3;
    }
    .y-axis {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        grid-area: 2 / 1 / 3 / 2;
    }
    .patches {
        grid-area: 2 / 2 / 3 / 3;
        align-items: flex-start;
        justify-items: flex-start;
        justify-content: flex-start;
    }
</style>
