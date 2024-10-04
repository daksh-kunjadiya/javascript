const navbar = () => {
    return `
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
                        <a class="nav-link" href="/JS-EXAM/JS-FINAL EXAM-2/index.html">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/JS-EXAM/JS-FINAL EXAM-2/pages/add.html">ADD</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/JS-EXAM/JS-FINAL EXAM-2/pages/signup.html">SIGNUP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/JS-EXAM/JS-FINAL EXAM-2/pages/login.html">LOGIN</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>`
}
export default navbar;