
import Icon from "./ui/Icon";
import DeviceView from "./DeviceView";
import { ChevronDown, Eye, Save } from "lucide-react";

export default function TopNavigation() {
  return (
    <div className="bg-background size-full py-2 px-4 flex items-center justify-between border-b border-white/20">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <p className="text-primary text-lg font-semibold capitalize">home page</p>
          <Icon iconName={ChevronDown} className="size-4 text-primary translate-y-0.5" enableTooltip={false} />
        </div>
        <p className="text-white/50 text-xs">www.example.com/home</p>
      </div>
      <div className="flex items-center gap-4">
        <DeviceView />
      </div>
      <div className="flex items-center gap-4">
        <Icon enableTooltip={true} iconName={Eye} tooltipText="Preview" tooltipDirection="bottom" />
        <Icon enableTooltip={true} iconName={Save} tooltipText="Save" tooltipDirection="bottom" />

        <button className="flex items-center gap-2 py-1 px-2 w-fit bg-primary rounded text-white">
          {/* <Icon enableTooltip={false} iconName={Radio} tooltipText="Publish" tooltipDirection="right" /> */}
          <p className="capitalize">publish</p>
        </button>
      </div>
    </div>
  )
}
