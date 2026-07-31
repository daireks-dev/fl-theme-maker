import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-700 w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-200 h-[60vh] aspect-video flex-row">
        <div className="bg-slate-300 w-full h-[20%] flex-row">
          <div className="bg-slate-400 w-full h-[50%] flex">
            <div className="outline-1 outline-slate-600 m-1 flex-1 bg-slate-500">

            </div>
            <div className="outline-1 outline-slate-600 m-1 flex-1 bg-slate-500">

            </div>
          </div>
          <div className="bg-slate-400 w-full h-[50%] flex">
            <div className="outline-1 outline-slate-600 m-1 flex-1 bg-slate-500">

            </div>
            <div className="outline-1 outline-slate-600 m-1 flex-1 bg-slate-500">

            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-full h-[80%] flex">
          <div className="bg-slate-500 w-[10%] flex">

          </div>
          <div className="bg-slate-600 w-[2%] flex">

          </div>
          <div className="bg-slate-300 w-[10%] flex">

          </div>
          <div className="bg-slate-200 w-[78%] flex">

          </div>
        </div>
      </div>
    </div>
  );
}
