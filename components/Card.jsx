import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="parent text-black p-10">
      <div className="card h-100 w-80 bg-[#fff6f6] rounded-2xl p-4">
        <div className="top p-2 flex justify-between">
          <img
            className="w-15 h-15 rounded-full"
            src={props.img}
            alt=""
          />
          <div className="right flex items-center gap-0.5">
            <button className="w-10">Save</button>
            <Bookmark />
          </div>
        </div>
        <div className="center mt-1">
          <h3 >
           {props.cpny} <span className="text-zinc-400">{props.days} days ago</span>
          </h3>
          <h2 className="text-2xl font-semibold">{props.job}</h2>
          <div className="flex gap-1">
            <h4 className="bg-zinc-200 pl-2 pr-2 rounded-sm">{props.time}</h4>
            <h4 className="bg-zinc-200 pl-2 pr-2 rounded-sm">{props.rol}</h4>
          </div>
        </div>
        <div className="bottom flex justify-between mt-40">
          <div className="">
            <h3 className="text-2xl">${props.pay}/hr</h3>
            <p className="text-sm text-zinc-400">{props.location}</p>
          </div>
          <button className="bg-black text-white pl-5 pr-5 rounded-sm h-8 mt-3">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card