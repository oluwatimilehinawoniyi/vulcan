import { Tablet, Smartphone, LaptopMinimal } from "lucide-react";
import Icon from "./ui/Icon";
import { useState } from "react";

export default function DeviceView() {
    const [device, setDevice] = useState<string>("desktop");

    const handleDeviceChange = (device: string) => {
        setDevice(device);
    }

    return (
        <div className="flex items-center gap-2">
            <div className={`flex items-center p-1 rounded cursor-pointer size-8 justify-center ${device === "desktop" ? "bg-primary text-white" : ""}`} onClick={() => handleDeviceChange("desktop")}>
                <Icon enableTooltip={true} iconName={LaptopMinimal} tooltipText="Desktop View" tooltipDirection="bottom" className="hover:text-white" />
            </div>
            <div className={`flex items-center p-1 rounded cursor-pointer size-8 justify-center ${device === "tablet" ? "bg-primary text-white" : ""}`} onClick={() => handleDeviceChange("tablet")} >
                <Icon enableTooltip={true} iconName={Tablet} tooltipText="Tablet View" tooltipDirection="bottom" className="hover:text-white" />
            </div>
            <div className={`flex items-center p-1 rounded cursor-pointer size-8 justify-center ${device === "mobile" ? "bg-primary text-white" : ""}`} onClick={() => handleDeviceChange("mobile")}>
                <Icon enableTooltip={true} iconName={Smartphone} tooltipText="Mobile View" tooltipDirection="bottom" className="hover:text-white" />
            </div>
        </div>
    )
}
