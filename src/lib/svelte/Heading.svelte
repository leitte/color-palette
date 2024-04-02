<script>
    import "$lib/css/theme.css";

    export let title = "TITLE";
    export let text = "additional information";
</script>

<div class="container">
    <span class="title">{title}</span>
    <p class="text">{@html text}</p>
</div>

<style>
    .container {
        display: flex;
        align-items: flex-start;
        line-height: normal;
    }

    .title {
        font-size: calc(var(--base-font-size) * 2.7);
        font-weight: 500;
    }

    .text {
        margin: 5px;
        flex: 1;
    }
</style>