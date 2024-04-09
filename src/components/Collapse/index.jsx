import './collapse.scss'
import { useState } from 'react'
import arrow from '../../assets/img/arrow.svg'

function Collapse({ collapseTitle, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">
          {collapseTitle}{' '}
          <img
            className={isOpen ? 'arrow' : 'arrow-reversed'}
            src={arrow}
            alt="flêche directionnelle"
          />
        </h3>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  )
}

export default Collapse
