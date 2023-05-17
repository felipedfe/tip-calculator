export interface IInputs {
  bill: string,
  setBill: React.Dispatch<React.SetStateAction<string>>,
  percentage: string,
  setPercentage: React.Dispatch<React.SetStateAction<string>>,
  people: string,
  setPeople: React.Dispatch<React.SetStateAction<string>>,
  activeButton: string,
  customInput: string,
  setCustomInput: React.Dispatch<React.SetStateAction<string>>,
  setActiveButton: React.Dispatch<React.SetStateAction<string>>,
  setTipAmount: React.Dispatch<React.SetStateAction<number>>,
  setTotal: React.Dispatch<React.SetStateAction<number>>,
};

export interface ITipButtons {
  setPercentage: React.Dispatch<React.SetStateAction<string>>,
  activeButton: string,
  setActiveButton: React.Dispatch<React.SetStateAction<string>>,
  setCustomInput: React.Dispatch<React.SetStateAction<string>>
}

export interface ITipButton extends ITipButtons{
  text: string,
  value: number,
};

export interface IResult {
  tipAmount: number,
  total: number,
  setBill: React.Dispatch<React.SetStateAction<string>>,
  setActiveButton: React.Dispatch<React.SetStateAction<string>>,
  setPercentage: React.Dispatch<React.SetStateAction<string>>,
  setPeople: React.Dispatch<React.SetStateAction<string>>,
  setCustomInput: React.Dispatch<React.SetStateAction<string>>,
};
