import { InputBaseProps } from "@material-ui/core";

export interface IInputField extends InputBaseProps {
  onChange: (v: any) => void
  type: string
  placeholder: string
}