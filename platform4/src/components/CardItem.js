import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './MrktButton';
import { Line } from 'react-chartjs-2';
import './CardItem.css';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        buy: false,
        sell: false,
        quantity: 0,
    };
    this.passTransactionData = this.passTransactionData.bind(this);
  }

  passTransactionData() {
    localStorage.setItem('playerPurchaseName', this.props.title);
    localStorage.setItem('playerPurchaseTeam', '');
    localStorage.setItem('playerPurchasePos', '');
    localStorage.setItem('playerPurchasePrice', this.props.marketPrice + ' ETH');
    localStorage.setItem('playerPurchaseImg', this.props.src);
    localStorage.setItem('playerPurchaseLabel', this.props.label);
    localStorage.setItem('playerTokenId', this.props.tokenId);
  }

  render() {
    return (
      <>
        <li className='cards__item'>
          {this.props.path && <Link className='cards__item__link' to={this.props.path}>
            <figure className='cards__item__pic-wrap' data-category={this.props.label}>
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={this.props.src}
              />
            </figure>
              <h5 className='cards__item__name'>{this.props.title}</h5>
              <div className='cards__item__info'>
              {this.props.r1 && <h5 className='cards__item__pos'>{this.props.r1}</h5>}
              {this.props.r2 && <h5 className='cards__item__pos'>{this.props.r2}</h5>}
              {this.props.r3 &&  <h5 className='cards__item__pos'>{this.props.r3}</h5>}
              {this.props.graphEnabled && <Line
                data={this.props.graphData}
                width={100}
                height={70}
                options={this.props.graphOptions}
              />}
              {this.props.btn2Title && <div className="cards_item_buy-sell">
              <Button buttonStyle='MrktButton--buy' onClick={this.props.action1Handler}>{this.props.btn1Title}</Button>
              <Button buttonStyle='MrktButton--sell' onClick={this.props.action2Handler}>{this.props.btn2Title}</Button>
            </div>}
            {this.props.mainBtnText && <div className="cards__item__pos">
              <button className="card_item_main_button" onClick={this.passTransactionData}>{this.props.mainBtnText}</button>
            </div>}
            </div>
          </Link>}
        </li>
      </>
    );
  }
}

export default CardItem;
