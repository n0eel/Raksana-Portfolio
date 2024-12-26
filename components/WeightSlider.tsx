import { Slider } from "@nextui-org/slider";

export default function WeightSlider() {
  return (
    <Slider
      isDisabled
      className="max-w-md text-white text-[30px]"
      label="Weight"
      defaultValue={50}
      maxValue={80}
      minValue={0}
      size="sm"
      step={0.01}
      color="warning"
    />
  );
}