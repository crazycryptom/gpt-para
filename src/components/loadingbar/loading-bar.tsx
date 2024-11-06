import css from "./loading-bar.module.css";

export const Loadingbar = ({
  color = "bg-gray-600",
}: {
  color: "bg-gray-600" | "bg-primary-700" | "bg-green-700"; // Add bg-green-700 here
}) => (
  <div className="relative h-[1px] w-full overflow-hidden rounded bg-gray-100">
    <div className={color + " h-full w-1/3 rounded " + css["shim-gray"]}></div>
  </div>
);
