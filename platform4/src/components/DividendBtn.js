import React from 'react';
import './BuyAsset.css';

class DividendBtn extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        if (this.props.tokenId < 10) {
            return (
                <button className="purchase-confirmation" onClick={this.onClick}>Collect Bounty</button>
            )
        } else {
            return(<div></div>);
        }
    }

    onClick() {
        fetch(`${process.env.REACT_APP_NBA_API}to_send_per_entity/${this.props.tokenId}/${this.props.sharesOwned}/69/100000000000000000000`)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
               this.props.deployerContract.methods.sellTokens(result.to_send.toString()).send({from:this.props.userAddress})
            },
            (error) => {
              console.log(error)
            }
        )
    }
}

export default DividendBtn;