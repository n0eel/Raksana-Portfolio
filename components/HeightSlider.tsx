import { Slider } from "@nextui-org/slider";

export default function HeightSlider() {
  return (
    <Slider
      isDisabled
      className="max-w-md text-white text-[30px]"
      label="Height"
      defaultValue={165}
      maxValue={200}
      minValue={0}
      size="sm"
      step={0.01}
      color="warning"
    />
  );
}