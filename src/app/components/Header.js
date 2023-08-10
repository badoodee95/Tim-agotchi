import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Header() {

    return (
        <nav class="navbar bg-customcolor1 fixed-top border-primary-subtle">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1 text-light" href="/">Tim-agotchi</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tim-agotchi</h5>  {/* We can put maybe the name of the tim-agotchi here */}
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Create New Tim-agotchi</a>
                            </li>
                            <hr />
                            <li class="nav-item">
                                <a class="nav-link" href="#">Signout</a>
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
