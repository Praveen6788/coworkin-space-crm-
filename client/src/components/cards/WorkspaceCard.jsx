function WorkspaceCard({
  image,
  type,
  rating,
  name,
  price
}) {

  return (

    <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-[320px] object-cover"
      />



      <div className="p-7">

        <div className="flex items-center justify-between mb-5">

          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-medium">

            {type}

          </span>


          <span className="text-sm text-slate-500">

            ⭐ {rating}

          </span>

        </div>


        <h3 className="text-[28px] leading-tight font-semibold mb-5">

          {name}

        </h3>


        <div className="flex items-center justify-between">

          <p className="text-slate-500 text-[15px]">

            From
            <span className="text-sky-500 font-semibold ml-1">

              {price}

            </span>

          </p>


          <button className="text-sky-500 font-medium text-[15px]">

            View Details →

          </button>

        </div>

      </div>

    </div>

  );
}

export default WorkspaceCard;