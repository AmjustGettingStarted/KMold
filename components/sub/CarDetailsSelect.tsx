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

  // For re-directing the page to the given url
  const handleVariantChange = (value: string) => {
    router.push(`/details/${encodeURIComponent(value.replaceAll(" ", "_"))}`);
  };

  return (
    <Select onValueChange={handleVariantChange}>
      <SelectTrigger className="px-2 text-[13px] w-full tracking-tighter border border-gray-300 rounded-xs lg:size-max">
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
