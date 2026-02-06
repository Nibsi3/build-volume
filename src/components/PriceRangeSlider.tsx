"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PriceRangeSliderProps {
  minDefault?: number;
  maxDefault?: number;
  absoluteMin?: number;
  absoluteMax?: number;
}

export default function PriceRangeSlider({
  minDefault = 0,
  maxDefault = 100000,
  absoluteMin = 0,
  absoluteMax = 100000,
}: PriceRangeSliderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [minValue, setMinValue] = useState(minDefault);
  const [maxValue, setMaxValue] = useState(maxDefault);

  useEffect(() => {
    const minParam = searchParams.get("minPrice");
    const maxParam = searchParams.get("maxPrice");
    if (minParam) setMinValue(Number(minParam));
    if (maxParam) setMaxValue(Number(maxParam));
  }, [searchParams]);

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (minValue > absoluteMin) {
      params.set("minPrice", String(minValue));
    } else {
      params.delete("minPrice");
    }
    
    if (maxValue < absoluteMax) {
      params.set("maxPrice", String(maxValue));
    } else {
      params.delete("maxPrice");
    }
    
    params.delete("page");
    
    const qs = params.toString();
    router.push(qs ? `/shop?${qs}` : "/shop");
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };

  const minPercent = ((minValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100;
  const maxPercent = ((maxValue - absoluteMin) / (absoluteMax - absoluteMin)) * 100;

  return (
    <div className="space-y-4">
      <div className="text-white/60 text-xs tracking-widest uppercase">Price Range</div>
      
      {/* Display values */}
      <div className="flex justify-between text-sm text-white">
        <span>R{minValue.toLocaleString()}</span>
        <span>R{maxValue.toLocaleString()}</span>
      </div>

      {/* Dual range slider */}
      <div className="relative h-2 mt-4">
        {/* Track background */}
        <div className="absolute inset-0 bg-white/10 rounded-full" />
        
        {/* Active track */}
        <div
          className="absolute h-full bg-[#15647c] rounded-full"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min slider */}
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={1000}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
        />

        {/* Max slider */}
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={1000}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
        />
      </div>

      {/* Apply button */}
      <button
        onClick={handleApply}
        className="w-full mt-4 px-4 py-2 bg-[#15647c] text-white text-xs tracking-widest uppercase hover:bg-[#1a7a96] transition-colors"
      >
        Apply Price Filter
      </button>
    </div>
  );
}
