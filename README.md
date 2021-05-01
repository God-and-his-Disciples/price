# pr!ce
 Imagine if you could invest in the Weeknd before he became the most popular artist in the world? All while recieving a steady income for being a shareholder. AND have the opportunity to ride the market, buy low, sell high, participate in a game that could net you a very valuable NFT, designating you a champion. Finally you can support a good cause. Opportunities are endless on pr!ce.

```solidity
function giveDividendPerPlayer(string memory request_uri) public hasSeasonStarted {
        require(lastDividendWithdrawn[msg.sender] < currWeekStart);
        
        lastDividendWithdrawn[msg.sender] = block.timestamp;
        requestDividendWorthyEntities(request_uri);

        // send back sendAmount
    }
```
