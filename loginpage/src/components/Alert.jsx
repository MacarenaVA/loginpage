const Alert = ({ alert }) => {
  return <div className={`alert alert-${alert.color} my-3`}>{alert.m}</div>
}

export default Alert
