import * as React from "react";
import { useRouter } from "next/navigation";
import { variants } from "@/data/carVariants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CarDetailsSelect({ title }: { title: string }) {
  const router = useRouter();

  const handleVariantChange = (value: string) => {
    router.push(`/details/${value.replaceAll(" ", "_")}`);
  };

  return (
    <Select onValueChange={handleVariantChange}>
      <SelectTrigger className="px-2 text-[13px] tracking-tighter border border-gray-300 rounded-xs size-[200px]">
        <SelectValue
          placeholder={title}
          className="-ml-2 placeholder:text-black"
        />
      </SelectTrigger>
      <SelectContent className="border-none">
        <SelectGroup>
          {variants.map((item, i) => (
            <SelectItem
              key={i}
              className="text-black hover:bg-gray-500 hover:text-white"
              value={item.title}
            >
              {i === 0 ? title : item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
