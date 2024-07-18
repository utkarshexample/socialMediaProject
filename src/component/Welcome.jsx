const Welcome = () => {
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          There are no Posts!!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly Add New Post by Clicking the Post Now button !!!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Post Now
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Welcome;
