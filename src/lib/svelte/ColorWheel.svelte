<script>
    import chroma from "chroma-js";
    import { range, polar2cartesian } from "$lib/math.js";
    import referenceColors from "$lib/referenceColors.js";

    export let hue = 0;

    const angle = 10;
    const angle2 = 9;
    const minRadius = 30;
    const maxRadius = 49;

    const colors = referenceColors.reduce((obj, item) => {
        obj[item.h] = item;
        return obj;
    }, {});

    // precompute the coordinates for a reference arc piece
    const arc = `M ${polar2cartesian(maxRadius, -angle2 / 2).join(",")} 
                 A ${maxRadius},${maxRadius} 0 0 1 ${polar2cartesian(maxRadius, angle2 / 2).join(",")} 
                 L ${polar2cartesian(minRadius, angle2 / 2).join(",")} 
                 A ${minRadius},${minRadius} 0 0 0 ${polar2cartesian(minRadius, -angle2 / 2).join(",")}`;
</script>

<div class="color-wheel">
    <svg viewBox="-50 -50 100 100">
        {#each range(0, 360, angle) as hue2, i}
            <path
                on:click={(e) => {hue = hue2;}}
                d={arc}
                fill={chroma.hcl(colors[Math.round(hue2/10)*10]).hex()}
                transform="rotate({-angle * i})"
                style:cursor="pointer"
            />
        {/each}

        <g class="hue-marker" fill="#333" transform="rotate({-hue})">
            <polygon points="{minRadius+1},0 {minRadius-1},3 {minRadius-1},-3"/>
            <polygon points="{maxRadius-1},0 {maxRadius+1},3 {maxRadius+1},-3"/>
        </g>
    </svg>
</div>

<style>
    svg {
        width: 100%;
        height: 100%;
    }

    .color-wheel {
        max-width: var(--max-width, 300px);
    }
</style>
