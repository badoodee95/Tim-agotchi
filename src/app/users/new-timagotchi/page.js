



export default function NewTimagotchi() {
    return (
        <section className="vh-100 bg-image"
            style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-international-cat-day-background_23-2149487428.jpg?w=2000&t=st=1691642130~exp=1691642730~hmac=cfdf3c304f91a859462f333b680b81ed3fe3679f91f4a1420e56f48c4ef94ccd')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.5)' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-5 text-light">Add a New Timagotchi</h2>

                                    <form>

                                        <div className="form-outline mb-4 text-light text-center">
                                            <label className="form-label" htmlFor="form3Example1cg">Name</label>
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4 text-light text-center">
                                            <label className="form-label" htmlFor="form3Example3cg">Gender</label>
                                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4 text-light text-center">
                                            <label className="form-label" htmlFor="form3Example4cg">Type</label>
                                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                className="btn btn-outline-success btn-lg gradient-custom-4 text-body">Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}