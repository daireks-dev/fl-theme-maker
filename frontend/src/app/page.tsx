import Image from "next/image";
import Mask from "../../components/Mask";
import Color from "../../components/Color";
import { colorModels } from "../../lib/colors";
import { Slider } from "@/components/ui/slider";

const hue = 180
const saturation = 0
const brightness = 0

//Calculated
const bgColorLightest = `hsl(
  ${198 + hue},
  ${colorModels.bgcolorLightest.saturation(saturation, brightness)}%,
  ${colorModels.bgcolorLightest.brightness(brightness)}%
)`;
const bgColorLight = `hsl(
  ${198 + hue},
  ${colorModels.bgcolorLight.saturation(saturation, brightness)}%,
  ${colorModels.bgcolorLight.brightness(brightness)}%
)`;
const bgColor = `hsl(
  ${198 + hue},
  ${colorModels.bgColor.saturation(saturation, brightness)}%,
  ${colorModels.bgColor.brightness(brightness)}%
)`;
const bgColorDark = `hsl(
  ${198 + hue},
  ${colorModels.bgcolorDark.saturation(saturation, brightness)}%,
  ${colorModels.bgcolorDark.brightness(brightness)}%
)`;
const bgColorDarkest = `hsl(
  ${198 + hue},
  ${colorModels.bgcolorDarkest.saturation(saturation, brightness)}%,
  ${colorModels.bgcolorDarkest.brightness(brightness)}%
)`;

const measureColor1 = `hsl(
  ${198 + hue},
  ${colorModels.measureColor1.saturation(saturation, brightness)}%,
  ${colorModels.measureColor1.brightness(brightness)}%
)`;
const measureColor2 = `hsl(
  ${198 + hue},
  ${colorModels.measureColor2.saturation(saturation, brightness)}%,
  ${colorModels.measureColor2.brightness(brightness)}%
)`;
const measureCountColor = `hsl(
  ${198 + hue},
  ${colorModels.bgcolorDarkest.saturation(saturation, brightness)}%,
  ${colorModels.bgcolorDarkest.brightness(brightness)}%
)`;

const patternListColor = `hsl(
  ${198 + hue},
  ${colorModels.patternListColor.saturation(saturation, brightness)}%,
  ${colorModels.patternListColor.brightness(brightness)}%
)`;
const trackListColor = `hsl(
  ${198 + hue},
  ${colorModels.trackListColor.saturation(saturation, brightness)}%,
  ${colorModels.trackListColor.brightness(brightness)}%
)`;

//Not Calculated
const patternHeadColor = "#434F55";
const patternBodyColor = measureCountColor;

const accent1 = "#7DDB00";
const accent2 = "#FF9F41";

const tempoColor = "#BBBBBB";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" style={{ backgroundColor: `hsl(${hue+198}, ${((saturation+256)/512)*100}%, ${((brightness+256)/512)*100}%)` }}>
      <div className="bg-slate-600 h-[60vh] aspect-video flex-row">
        <div className="bg-slate-600 w-full h-[15%] flex-row">
          <div className="w-full h-[50%] flex" style={{ backgroundColor: bgColor }}>
            <div className="m-[0.25%] flex-1 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Window Buttons.png" alt="" fill className="object-contain scale-80"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLightest }}>
              <Image src="/images/playlist_ui/FileEditAdd.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-3 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/PlayButtons.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/PlayButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/PlayButtonMask2.png" color={bgColorDarkest} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/PlayButtonMask3.png" color={tempoColor} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Time.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/TimeButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/TimeButtonMask2.png" color={bgColorDark} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/TimeButtonMask3.png" color={bgColorLightest} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-2 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Visualizers.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/VisualizerMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-2 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Metrics.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/MetricMask.png" color={bgColorDarkest} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/TopRightButtons.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/TRButtonMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
          </div>
          <div className="w-full h-[50%] flex" style={{ backgroundColor: bgColor }}>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/ContextPanel.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/ContentPanelMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-1 aspect-square relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/MasterVolume.png" alt="" fill className="object-contain scale-80 my-[1.5] z-1"/>
              <Mask src="/images/ui_masks/VolumeKnobMask.png" color={bgColorDark} className="object-contain scale-80 my-[1.5]"/>
            </div>
            <div className="m-[0.25%] flex-1 aspect-square relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/PitchKnob.png" alt="" fill className="object-contain scale-90 z-1"/>
              <Mask src="/images/ui_masks/PitchKnobMask.png" color={bgColorDark} className="object-contain scale-90"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/TimeSlider.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/SliderMask.png" color={accent1} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/InputOptions.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/InputButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask2.png" color={bgColorDark} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask3.png" color={bgColorDarkest} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask4.png" color={tempoColor} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/BottomRightOptions.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/BRButtonMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-3 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/News.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/NewsMask.png" color={bgColorLightest} className="object-contain scale-95"/>
            </div>
          </div>
        </div>
        <div className="w-full h-[3%] flex p-[0.1%] space-x-[0.5%]" style={{ backgroundColor: bgColor }}>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/AdditionalOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/QuantizeOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative"/>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/PencilTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/BrushTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/DeleteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/MuteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/TwoArrows.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Cut.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/SelectTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Magnify.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Vol1.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative"/>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Vol2.png" alt="" fill className="object-contain scale-80"/>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[7%] flex">
          <div className="w-[12%] flex relative" style={{ backgroundColor: bgColor }}>
              <Image src="/images/playlist_ui/ClipButtons.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="w-[10%] flex relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/ViewButtons.png" alt="" fill className="object-contain scale-85"/>
          </div>
          <div className="bg-slate-800 w-[78%] flex-row">
            <div className="h-[50%] relative" style={{ backgroundColor: bgColorLightest }}>
              <Image src="/images/playlist_ui/ScrollArrowPair.png" alt="" fill className="object-contain scale-98"/>
            </div>
            <div className="h-[50%] relative" style={{ backgroundColor: measureCountColor }}>
              <Image src="/images/playlist_ui/Measures.png" alt="" fill className="object-contain scale-35 mx-[-32.5%]"/>
            </div>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[75%] flex relative">
          <div className="w-[1%] h-full ml-[75%] flex z-10 absolute">
            <Image src="/images/playlist_ui/ScrollBar.png" alt="" fill className="object-contain scale-125 my-[-50%] z-1"/>
            <Mask src="/images/ui_masks/SeekerMask.png" color={accent1} className="object-contain scale-125 translate-y-[-1.25%]"/>
          </div>
          <div className="bg-slate-500 w-[11%] flex relative">
            <Image src="/images/playlist_ui/PatternList.png" alt="" fill className="object-contain scale-y-[1.005] scale-x-[1.05] z-1"/>
            <Color color={patternListColor} className="object-contain w-full h-full"/>
          </div>
          <div className="w-[1%] flex" style={{ backgroundColor: bgColor }}/>
          <div className="bg-slate-400 w-[10%] flex relative">
            <Image src="/images/playlist_ui/Tracks.png" alt="" fill className="object-contain scale-y-101 z-1"/>
            <Color color={trackListColor} className="object-contain w-full h-full"/>
            <Mask src="/images/ui_masks/TrackButtons.png" color={accent1} className="object-contain scale-y-[1.017] translate-x-[0.5%]"/>
          </div>
          <div className="bg-slate-600 w-[78%] flex relative">
            <Image src="/images/playlist_ui/Arrangement.png" alt="" fill className="object-contain scale-100 scale-x-[1.015] z-1"/>
            <Mask src="/images/ui_masks/PlaylistMeasure1.png" color={measureColor1} className="object-contain scale-100 scale-x-[1.015]"/>
            <Mask src="/images/ui_masks/PlaylistMeasure2.png" color={measureColor2} className="object-contain scale-100 scale-x-[1.015]"/>
            <Mask src="/images/ui_masks/PatternContentMasks.png" color={patternBodyColor} className="object-contain scale-100 scale-x-[1.015]"/>
            <Mask src="/images/ui_masks/PatternHeaderMask.png" color={patternHeadColor} className="object-contain scale-100 scale-x-[1.015]"/>
          </div>
        </div>
      </div>

      <div className="bg-slate-500 aspect-video h-[30vh]">
        <Slider min={0} max={360}/>
      </div>
    </div>
  );
}
