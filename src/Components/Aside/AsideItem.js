import React, { Component } from 'react'

export default class AsideItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display: false
      }
    }
    
    toggleItem = () => {
        this.setState({
            display: !this.state.display
        })
    }

  render() {
      const { items, title } = this.props;
      const { display } = this.state
    return (
      <div className="aside-item">
        <div className="aside-item__title" onClick={this.toggleItem} >
            {title}
            <span>></span>    
        </div>
        {display 
        
            ? 
                items.map((it,i) => (
                    <div className="aside-item__childs-container" key={i}>
                        <div className="aside-item__childs-img">
                            <img src={it.img} alt="img" />
                        </div>
                        <div className="aside-item__childs-txt">
                            <div className='ttl'>{it.name}</div>
                            <div className='txt-cntnr'>
                                {it.sub 
                                    ? it.sub.map((txt, i) => (
                                        <div className='txt' key={i}>{txt}</div>
                                    ))
                                    : <React.Fragment />
                                }
                            </div>
                            
                        </div>
                    </div>    
                ))
            : <React.Fragment />
        }
        {}
      </div>
    )
  }
}
