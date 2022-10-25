<header>
    <nav>
        <a href="/">Home</a>
        <a href="/shop" data-sveltekit-prefetch>Shop</a>
        <a href="/movies">Movies</a>
    </nav>
</header>

<!-- For the page's content -->
<slot></slot>



<style>
    header{
        width: 100%;
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.15);
    }

    nav {
        height: 100%;
        margin: 0;
        padding: 0;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.75em;
    }
</style>