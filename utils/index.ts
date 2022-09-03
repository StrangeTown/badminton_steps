import { Dimensions } from "react-native";

export const appDimensions = {
  isSmallDevice: () => {
    const { width, height } = Dimensions.get("window");
    return height < 800
  },
}
