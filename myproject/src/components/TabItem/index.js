import './index.css'

const TabItem =props=>{
      const {tabList,onButtonCkick,activeButton} = props
      const{displayText,tabId} = tabList
      const active = activeButton?"active-button":null;

      const buttonClicked = ()=>{
            onButtonCkick(tabId)
      }
      return(
            <li>
                  <button type="button" className={`tab-items-button ${active}`} onClick={buttonClicked}>
                        {displayText}
                  </button>
            </li>
      )
}
export default TabItem