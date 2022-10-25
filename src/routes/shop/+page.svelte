<script>
    export let data;

    const { products } = data;
    const { users } = data;
</script>





<h1>Shop</h1>

{#each products as product}
    <div class="productWrapper">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>Sold by {users[product.id - 1].firstName}</span>
    </div>
{/each}





<style>
    .productWrapper {
        margin-left: 50px;
        margin-bottom: 1.5em;
        max-width: 75%;

        padding: 0.75em;
        border-radius: 5px;
        border: 1px solid lightgray;

        display: block;
    }
</style>