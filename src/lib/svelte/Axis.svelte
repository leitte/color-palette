<script>
    import "$lib/css/theme.css";

    export let left = "start";
    export let right = "end";
    export let color = "#333";
</script>

<div class="container">
    <div class="label">{left}</div>
    <div class="line"></div>
    <div class="label">{right}</div>
</div>

<style>
    .container {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        position: relative;
        padding: 0px 0;
        color: var(--annotation-color);
    }

    .label {
        padding: 0 0px; /* Adjusts the space around the labels */
    }

    .line {
        flex-grow: 1;
        height: 1.5px;
        width: 1.5px;
        margin: 10px;
        background-color: var(--annotation-color);
    }
</style>
