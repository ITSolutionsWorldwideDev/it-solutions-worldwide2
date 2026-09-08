"use client";

import dynamic from "next/dynamic";
import LazyMount from "../LazyMount";

const ClientLogosSlider = dynamic(
  () => import("./LogosSlider").then((mod) => ({ default: mod.ClientLogosSlider })),
  { loading: () => <div className="min-h-[220px]" />, ssr: false }
);

export default function LazyClientLogosSlider() {
  return (
    <LazyMount minHeight={220}>
      <ClientLogosSlider />
    </LazyMount>
  );
}