const AddToy = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.toyName.value;
    const details = form.details.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const status = form.status.value;
    const quantity = form.quantity.value;
    const brand = form.brand.value;
    const dealer = form.dealer.value;
    const imageURL = form.imageURL.value;

    const generateRandomId = (length = 8) =>
      [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
    const generadedId = generateRandomId();

    const newToy = {
      id: generadedId,
      productName: name,
      category: category,
      subCategory: subCategory,
      price,
      details,
      available: status,
      quantityInStock: quantity,
      brand,
      publisher: dealer,
      rating,
      img: imageURL,
    };
    console.log(newToy);
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Toys added successfully.");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-100 mx-auto rounded-lg text-slate-800">
        <form onSubmit={handleSubmit} className="card-body pt-2 text-white">
          <p className="text-lg text-left text-slate-700 mt-4">Add A New Toy</p>
          <div className="divider bg-grey-300 h-1 rounded-sm m-0 bg-slate-800"></div>

          <div className="grid grid-cols-2 gap-3">
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-slate-800">Toy Name</span>
              </label>
              <input
                name="toyName"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-slate-800">Details</span>
              </label>
              <textarea
                name="details"
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full  col-span-2"
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Category</span>
              </label>
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered"
                value="Cars"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Sub Category</span>
              </label>
              {/* <input type="text" placeholder="Sub Category" className="input input-bordered" /> */}
              <select
                name="subCategory"
                className="input input-bordered text-white"
              >
                <option value="">SELECT A SUBCATEGORY</option>
                <option value="hot wheels">HOT WHEELS CARS</option>
                <option value="rc cars">RC CARS</option>
                <option value="cast toy">CAST CARS</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Price</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">
                  Available Status
                </span>
              </label>

              <select
                name="status"
                id="cars"
                className="input input-bordered text-white"
              >
                <option value="Not Available">Not Available</option>
                <option value="Available">Available</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Quantity</span>
              </label>
              <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Brand</span>
              </label>
              <input
                name="brand"
                type="text"
                placeholder="Brand"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Dealer</span>
              </label>
              <input
                name="dealer"
                type="text"
                placeholder="Publisher"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-800">Ratings</span>
              </label>
              <input
                name="rating"
                type="number"
                placeholder="Ratings"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-slate-800">IMAGE URL</span>
              </label>
              <input
                name="imageURL"
                type="text"
                placeholder="IMAGE URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD NEW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
