import { CircleUserRound, Cog, ImagePlus, Layers, LogOut, MessageCircleQuestionMark, SquarePlus } from "lucide-react";
import Icon from "./ui/Icon";

export default function LeftNavigation() {
    return (
        <div className="size-full flex flex-col justify-between items-center p-4 bg-background">
            <div className="flex items-center flex-col gap-20">
                <div className="logo">
                    <h1 className="font-bold text-white">V</h1>
                </div>

                <div className="flex flex-col gap-8">
                    <Icon iconName={SquarePlus} tooltipText="Add New" tooltipDirection="right" enableTooltip={true} />

                    <Icon iconName={ImagePlus} tooltipText="Import Assets" tooltipDirection="right" enableTooltip={true} />

                    <Icon iconName={Layers} tooltipText="Layers" tooltipDirection="right" enableTooltip={true} />

                    <Icon iconName={Cog} tooltipText="Page Settings" tooltipDirection="right" enableTooltip={true} />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <Icon iconName={MessageCircleQuestionMark} tooltipText="Help" tooltipDirection="right" enableTooltip={true} />

                <Icon iconName={CircleUserRound} tooltipText="Profile" tooltipDirection="right" enableTooltip={true} />

                <Icon iconName={LogOut} tooltipText="Logout" tooltipDirection="right" enableTooltip={true} />
            </div>
        </div >
    )
}
