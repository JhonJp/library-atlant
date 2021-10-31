import { FC } from 'react'
import { IInputField } from '../../models/interfaces/Input'

export const InputField: FC<IInputField> = (props) => {
  return (
    <div className="form-group">
      <div className="col-md-12">
        <input
          type={props.type ? props.type : 'text'}
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}