import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './MrktButton';
import { Line } from 'react-chartjs-2';
import './PurchaseCardItem.css';

class PurchaseCardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numShares: '', buy: true, sell: true};
    
        this.handleChange = this.handleChange.bind(this);
        this.confirmBuy = this.confirmBuy.bind(this);
        this.confirmSell = this.confirmSell.bind(this);
      }
    
      handleChange(event) {
        this.setState({numShares: event.target.value});
        localStorage.setItem('pricePerShare', event.target.value);
        this.props.setQuantity(event.target.value);
      }

      // KEY NOTE: IF BOTH BUY AND SELL ARE TRUE THIS IS INVALID CASE, CAN FIX TMR

      confirmBuy() {
          this.setState({
              buy: true
          });
          console.log(this.state.buy);
      }

      confirmSell() {
        this.setState({
            sell: true
        });
        console.log(this.state.sell);
      }

    render() {
      console.log(JSON.parse(localStorage.getItem('playerPriceHistory'))[0]);
      const data = {
        labels: ['O', 'N', 'D', 'J', 'F', 'M'],
        datasets: [
          {
            label: 'Share Price (ETH)',
            data: JSON.parse(localStorage.getItem('playerPriceHistory')),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
        return (
            <>
              <li className='cards__item'>
                <div className='cards__item__link'>
                  <figure className='cards__item__pic-wrap' data-category={this.props.label}>
                    <img
                      className='cards__item__img'
                      alt='Travel Image'
                      src={this.props.src}
                    />
                  </figure>
                  <div className='cards__item__info'>
                    <h5 className='cards__item__name'>{this.props.name}</h5>
                    <h5 className='cards__item__position'>Cuurent Market Price: {this.props.price}</h5>
                  </div>
                  <Line
                    data={data}
                    width={100}
                    height={70}
                    options={options}
                  />
                  <div className="shares-quantity">
                    <h5 className='cards__item__name'>Enter Share Quantity</h5>
                    <center><input className="quantity-input" type="number" min="0" max="1000" onChange={this.handleChange}></input></center>
                    <br></br>
                  </div>
                  <div className="cards_item_buy-sell">
                    <input type="radio" id="buy" name="gender" value="male" onClick={this.props.buyAssert}></input>
                    <label for="buy">Buy</label><br></br>
                    <input type="radio" id="sell" name="gender" value="male" onClick={this.props.sellAssert}></input>
                    <label for="sell">Sell</label><br></br>
                  </div>
                </div>
              </li>
            </>
          );
    }
}

export default PurchaseCardItem;
