import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { productName, price, img, _id } = toy;

  return (
    <Link to={`/toys/${_id}`}>
      <div className="card w-86 h-[380px] bg-slate-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-[190px]" />
        </figure>
        <div className="card-body p-4 text-black ">
          <h2 className="card-title flex-1">{productName}</h2>

          <div className="card-actions">
            <dir className="flex justify-between gap-8 items-center p-0 ">
              <p className="mx-2">${price}</p>
              <button className="btn bg-[#FF217F] border-0 btn-sm">
                Details
              </button>
            </dir>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToyCard;
