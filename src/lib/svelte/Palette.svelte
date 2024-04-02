<script>
    import PaletteItem from "./PaletteItem.svelte";

    export let palette = [];
    $: indexed_palette = palette.map((item, index) => ({
        id: index,
        color: item,
    }));

    function swap(arr, i, j) {
		let tmp = [...arr];
		tmp[i] = arr[j];
		tmp[j] = arr[i];
		return tmp;
	}

	function onMoveLeft(event) {
        const i = event.detail.id;
		if (i > 0) {
			palette = swap(palette, i, i - 1);
		}
	}

	function onMoveRight(event) {
		//console.log('on move right', i, palette.length);
        const i = event.detail.id;
		if (i + 1 < palette.length) {
			palette = swap(palette, i, i + 1);
		}
	}

	function onDeleteColor(event) {
		//console.log('on delete', i, palette.length);
		const i = event.detail.id;
		palette.splice(i, 1);
		palette = palette;
	}    
</script>

{#key indexed_palette}
    <div style="margin: 1em; display: flex; flex-wrap: wrap;">
        {#each indexed_palette as pitem (pitem.id)}
            <PaletteItem 
                id={pitem.id}
                color={pitem.color}
                on:moveLeft={onMoveLeft}
				on:moveRight={onMoveRight}
				on:deleteColor={onDeleteColor}
            ></PaletteItem>
        {/each}
    </div>
{/key}
