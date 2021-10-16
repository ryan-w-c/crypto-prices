package com.cavanagh.crypto;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ExchangePriceController {

    RestClient client = new RestClient();

    @GetMapping("api/coinbase/BTC/Buy")
    public String buyCoinbaseBTC() throws IOException, InterruptedException {
        return client.returnRequest("https://api.coinbase.com/v2/prices/BTC-USD/buy", "amount");
    }

    @GetMapping("api/coinbase/BTC/Sell")
    public String sellCoinbaseBTC() throws IOException, InterruptedException {
        return client.returnRequest("https://api.coinbase.com/v2/prices/BTC-USD/sell", "amount");
    }

    @GetMapping("api/coinbase/ETH/Buy")
    public String buyCoinbaseETH() throws IOException, InterruptedException {
        return client.returnRequest("https://api.coinbase.com/v2/prices/ETH-USD/buy", "amount");
    }

    @GetMapping("api/coinbase/ETH/Sell")
    public String sellCoinbaseETH() throws IOException, InterruptedException {
        return client.returnRequest("https://api.coinbase.com/v2/prices/ETH-USD/sell", "amount");
    }

    @GetMapping("api/cex/BTC/Buy")
    public String buyCEXBTC() throws IOException, InterruptedException {
        return client.returnRequest("https://cex.io/api/ticker/BTC/USD", "bid");
    }

    @GetMapping("api/cex/BTC/Sell")
    public String sellCEXBTC() throws IOException, InterruptedException {
        return client.returnRequest("https://cex.io/api/ticker/BTC/USD", "ask");
    }

    @GetMapping("api/cex/ETH/Buy")
    public String buyCEXETH() throws IOException, InterruptedException {
        return client.returnRequest("https://cex.io/api/ticker/ETH/USD", "bid");
    }

    @GetMapping("api/cex/ETH/Sell")
    public String sellCEXETH() throws IOException, InterruptedException {
        return client.returnRequest("https://cex.io/api/ticker/ETH/USD", "ask");
    }
}