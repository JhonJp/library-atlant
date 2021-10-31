import { FC } from 'react'
import { ENotFound } from '../../models/enums/NotFoundEnum'
import { INotFound } from '../../models/interfaces/Error'

export const NotFound: FC<INotFound> = (props) => {
  const { dashboardLink, previousPageLink, errorCode, errorMsg, errorHint } = props
  return (
    <div className="error-container">
      <div className="error-code">{errorCode ? errorCode : '404'}</div>
      <div className="error-text">{errorHint ? errorHint : ENotFound.pageNotFound}</div>
      <div className="error-subtext">{errorMsg ? errorMsg : ENotFound.notFoundGenericMsg}</div>
      <div className="error-actions">
        <div className="row">
          <div className="col-md-6">
            <a href={dashboardLink}>
              <button className="btn btn-info btn-block btn-lg" >Back to dashboard</button>
            </a>
          </div>
          <div className="col-md-6">
            <a href={previousPageLink}>
              <button className="btn btn-primary btn-block btn-lg" >Previous page</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}