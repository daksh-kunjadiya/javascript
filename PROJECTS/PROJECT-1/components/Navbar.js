const navbar = () => {
    return `<div class="containr-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link fw-bold" aria-current="page" href="/PROJECTS/PROJECT-1/index.html">Home</a>
                    </li>
                    <li class="nav-item fw-bold">
                        <a class="nav-link" href="/PROJECTS/PROJECT-1/pages/Product.html">Product</a>
                    </li>
                    <li class="nav-item fw-bold">
                    <a class="nav-link" href="/PROJECTS/PROJECT-1/pages/AddProduct.html">AddProduct</a>
                    </li>
                    <li class="nav-item fw-bold">
                        <a class="nav-link" href="/PROJECTS/PROJECT-1/pages/Cart.html">Cart</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" id="search-icon">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
                    <button class="btn" type="submit">
                        <i class="fa-solid fa-magnifying-glass text-dark"></i>
                    </button>
                </form>
                <a href="/PROJECTS/PROJECT-1/pages/Signup.html" class="mx-3 bg-dark border-0 p-2 rounded-2 text-white btn">Signup</a>
                <a href="/PROJECTS/PROJECT-1/pages/Login.html" class="bg-dark border-0 p-2 rounded-2 text-white btn">Login</a>
            </div>
        </div>
    </nav>
</div>`;
};
export default navbar;
