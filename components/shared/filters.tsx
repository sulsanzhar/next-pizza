import { cn } from "@/lib/utils";
import {Title, FilterCheckbox, RangeSlider} from "../shared";
import {Input} from "@/components/ui";

interface TProps {
    className?: string;
}

export const Filters = ({className}: TProps) => {
    return (
        <div className={cn("", className)}>
            <Title size="sm" className="mb-5 font-bold" text="Фильтрация"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox  text={"Можно собирать"} value="1" />
                <FilterCheckbox   text={"Новинки"} value="1" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0}/>
                    <Input type="number" placeholder="30000" min={0} max={30000}/>
                </div>

                <RangeSlider  min={0} max={5000} step={10} value={[0, 1000]}/>
            </div>
        </div>
    );
};