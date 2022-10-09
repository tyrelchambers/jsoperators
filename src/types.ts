import { Icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export type Operator = {
  name: string;
  icon: string;
  moreInfo: string;
  filename: string;
};

export interface Search {
  name: string;
}
