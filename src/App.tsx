import { FC, useEffect, useMemo, useState } from "react"
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import TitlePage from "./components/TitlePage";
import { OperationEnum } from "./ts/enums";
import { Bar, button } from "./ts/types";
import { setClassNameSwitchWidth } from "./utils/functions";

const App: FC = () => {

  const [listBar, setListBar] = useState<Bar[]>([])

  useEffect(() => {

    const listBars: Bar[] = [
      { className: "bar__25__50", width: 50, label: "Initialisation du test technique" },
      { className: "bar__0__25", width: 25, label: "Avancement de la phase de développement" }
    ];
    setListBar(listBars)

  }, [])

  const btns: button[] = useMemo(() => {

    const changeWidth = (operation: string, value: number): void => {
      setListBar(listBar.map((bar: Bar) => {
        if (operation === OperationEnum.add) {
          const newWidth = bar.width + value
          if (newWidth <= 100) {
            bar.width = newWidth
          }
        }
        if (operation === OperationEnum.remise) {
          bar.width = 0
        }
        return setClassNameSwitchWidth(bar)
      }))
    }

    const listBtns: button[] = [
      { label: "Remettre à zéro les compteurs", onClick: () => changeWidth(OperationEnum.remise, 0) },
      { label: "Ajouter 5%", onClick: () => changeWidth(OperationEnum.add, 5) },
      { label: "Ajouter 10%", onClick: () => changeWidth(OperationEnum.add, 10) },
    ]
    return listBtns
  }, [listBar])

  const addNewProgressBarRandom = () => {
    const randomWidth = Math.floor(Math.random() * 100)
    let newBar: Bar = {
      width: randomWidth,
      className: "",
      label: ""
    }
    setListBar([...listBar, setClassNameSwitchWidth(newBar)])
  }

  return (
    <div>
      <TitlePage />
      {
        listBar && listBar.length > 0 ? <div>
          {
            listBar.map((bar: Bar, index: number) => <ProgressBar key={index} bar={bar} />)
          }
          <div className="div__btn__css">
            {
              btns.map((btn: button, index: number) => <Button key={index} {...btn} />)
            }
          </div>
          <div className="div__btn__css">
            {<Button {...{
              label: "Ajouter un nouveau progressBar", onClick: addNewProgressBarRandom
            }} />}
          </div>

        </div >
          :
          <div>liste de progress bar vide</div>
      }
    </div >
  );
}

export default App;