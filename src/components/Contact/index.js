const Contact = () => {
    return (
        <div>
            <div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
                <div class="card-header">Contact Me</div>
                <div class="card-body">
                    <p class="card-text">To get in touch with me send me a message and your Information and I'll be sure to get back to you ass soon as possible!</p>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Message</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;
