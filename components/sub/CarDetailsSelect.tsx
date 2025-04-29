import * as React from "react";
import { variants } from "@/data/carVariants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CarDetailsSelect({ title }: { title: string }) {
  return (
    <Select>
      <SelectTrigger className="px-2 text-[13px] tracking-tighter border border-gray-300 rounded-xs size-[200px]">
        <SelectValue
          placeholder={title}
          className="-ml-2 placeholder:text-black "
        />
      </SelectTrigger>
      <SelectContent className="border-none ">
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {variants.map((item, i) => (
            <SelectItem
              className="text-black hover:bg-gray-500 hover:text-white"
              value={item.title}
              key={i}
            >
              {i === 0 ? title : item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
