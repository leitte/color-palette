<script>
    import Heading from "$lib/svelte/Heading.svelte";
    import ColorWheel from "$lib/svelte/ColorWheel.svelte";
    import ColorGrid from "$lib/svelte/ColorGrid.svelte"
    import Palette from "$lib/svelte/Palette.svelte";
    import { hue, hue_step, error_tolerance, palette } from "$lib/stores";

    palette.set(['#aaa','#222']);

    function onKeyDown(e) {
        switch (e.keyCode) {
            case 37: // Left
                hue.update((h) => (h + $hue_step) % 360);
                break;
            case 39: // Right
                const new_hue = ($hue - $hue_step) % 360;
                hue.set(new_hue < 0 ? 360 + new_hue : new_hue);
                break;
        }
    }   
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="component" style:flex="1 1 300px">
    <Heading title="HUE" text="Select a hue with the mouse or use the left/right keys on the keyboard."/>
    <ColorWheel bind:hue={$hue}/>
</div>

<div class="component" style:flex="2 1 500px">
    <Heading title="SHADE" text="The patches show variants of the selected hue. <br>Click on a patch to add it to the palette."/>
    <ColorGrid 
        bind:hue={$hue} 
        bind:tolerance={$error_tolerance}
        on:colorClicked={(e) => palette.update((p) => [...p, e.detail.color])}
    />
</div>

<div class="component" style:flex="2 1 100%">
    <Heading title="PALETTE" text="Click on color patches in the SHADE part to add additional colors. <br>Click on the icons in the palette to move or delete colors." />
    <Palette bind:palette={$palette}/>
</div>

<div>{$palette}</div>

<style>
    .component {
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing-unit) * .5);
        width: min-content;
        max-width: var(--content-width);
    }
</style>