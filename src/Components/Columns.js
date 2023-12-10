import ImageCell from "./TableCells/ImageCell";
import VideoCell from "./TableCells/VideoCell";
import DateCell from "./TableCells/DateCell";
import ResultCell from "./TableCells/ResultCell";

export const COLUMNS = [
  {
    header: "Flight No.",
    accessorKey: "flight_number",
  },
  {
    header: "Patch",
    accessorKey: "links.mission_patch_small",
    cell: ImageCell,
    enableSorting: false,
  },
  {
    header: "Mission",
    accessorKey: "mission_name",
  },
  {
    header: "Launch Date",
    accessorKey: "launch_date_utc",
    cell: DateCell,
  },
  {
    header: "Launch Site",
    accessorKey: "launch_site.site_name",
  },
  {
    header: "Rocket",
    accessorKey: "rocket.rocket_name",
  },
  {
    header: "Launch Result",
    accessorKey: "launch_success",
    cell: ResultCell,
  },
  {
    header: "Launch Video",
    accessorKey: "links.video_link",
    cell: VideoCell,
    enableSorting: false,
  },
];
