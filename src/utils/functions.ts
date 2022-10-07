import { Bar } from "../ts/types"

export const setClassNameSwitchWidth = (bar: Bar): Bar => {
  if (bar.width >= 0 && bar.width < 25)
    bar.className = "bar__0__25"
  else if (bar.width >= 25 && bar.width < 50)
    bar.className = "bar__25__50"
  else if (bar.width >= 50 && bar.width < 75)
    bar.className = "bar__50__75"
  else
    bar.className = "bar__75__100"
  return bar
} 