import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-700 w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-200 h-[60vh] aspect-video flex-row">
        <div className="bg-slate-300 w-full h-[15%] flex-row">
          <div className="bg-slate-600 w-full h-[50%] flex">
            <div className="outline-1 outline-slate-600 m-0.5 flex-1 bg-slate-500 relative">
              <Image src="/images/playlist_ui/Window Buttons.png" alt="" fill className="object-contain scale-80"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-4 bg-slate-500 relative">
              <Image src="/images/playlist_ui/FileEditAdd.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-3 bg-slate-500 relative">
              <Image src="/images/playlist_ui/PlayButtons.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-4 bg-slate-500 relative">
              <Image src="/images/playlist_ui/Time.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-2 bg-slate-500 relative">
              <Image src="/images/playlist_ui/Visualizers.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-2 bg-slate-500 relative">
              <Image src="/images/playlist_ui/Metrics.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-4 bg-slate-500 relative">
              <Image src="/images/playlist_ui/TopRightButtons.png" alt="" fill className="object-contain scale-95"/>
            </div>
          </div>
          <div className="bg-slate-600 w-full h-[50%] flex">
            <div className="outline-1 outline-slate-600 m-0.5 flex-7 bg-slate-500 relative">
              <Image src="/images/playlist_ui/ContextPanel.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-1 aspect-square bg-slate-500 relative">
              <Image src="/images/playlist_ui/MasterVolume.png" alt="" fill className="object-contain scale-80 my-[1.5]"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-1 aspect-square bg-slate-500 relative">
              <Image src="/images/playlist_ui/PitchKnob.png" alt="" fill className="object-contain scale-90"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-4 bg-slate-500 relative">
              <Image src="/images/playlist_ui/TimeSlider.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-7 bg-slate-500 relative">
              <Image src="/images/playlist_ui/InputOptions.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-7 bg-slate-500 relative">
              <Image src="/images/playlist_ui/BottomRightOptions.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="outline-1 outline-slate-600 m-0.5 flex-3 bg-slate-500 relative">
              <Image src="/images/playlist_ui/News.png" alt="" fill className="object-contain scale-95"/>
            </div>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[3%] flex p-0.5 space-x-1">
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/AdditionalOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/QuantizeOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-600 aspect-square relative"/>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/PencilTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/BrushTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/DeleteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/MuteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
           <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/TwoArrows.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/Cut.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/SelectTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/Magnify.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/Vol1.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-600 aspect-square relative"/>
          <div className="bg-slate-500 aspect-square relative">
              <Image src="/images/playlist_ui/Vol2.png" alt="" fill className="object-contain scale-80"/>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[7%] flex">
          <div className="bg-slate-600 w-[12%] flex relative">
              <Image src="/images/playlist_ui/ClipButtons.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="bg-slate-700 w-[10%] flex relative">
              <Image src="/images/playlist_ui/ViewButtons.png" alt="" fill className="object-contain scale-85"/>
          </div>
          <div className="bg-slate-800 w-[78%] flex-row">
            <div className="bg-slate-500 h-[50%] relative">
              <Image src="/images/playlist_ui/ScrollArrowPair.png" alt="" fill className="object-contain scale-98"/>
            </div>
            <div className="bg-slate-800 h-[50%] relative">
              <Image src="/images/playlist_ui/Measures.png" alt="" fill className="object-contain scale-35 mx-[-200]"/>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-full h-[75%] flex relative">
          <div className="w-[1%] h-full ml-[75%] flex z-10 absolute">
            <Image src="/images/playlist_ui/ScrollBar.png" alt="" fill className="object-contain scale-125 my-[-4]"/>
          </div>
          <div className="bg-slate-500 w-[11%] flex relative">
            <Image src="/images/playlist_ui/PatternList.png" alt="" fill className="object-contain scale-y-[1.005] scale-x-[1.05]"/>
          </div>
          <div className="bg-slate-600 w-[1%] flex">

          </div>
          <div className="bg-slate-400 w-[10%] flex relative">
            <Image src="/images/playlist_ui/Tracks.png" alt="" fill className="object-contain scale-y-101"/>
          </div>
          <div className="bg-slate-600 w-[78%] flex relative">
            <Image src="/images/playlist_ui/Arrangement.png" alt="" fill className="object-contain scale-100 scale-x-[1.015]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
