exports.picker = function(prices) {
    let max_profit = prices[1] - prices[0]
    let min_index = 0
    let buy_index = 0
    let sell_index = 1

    for (let i = 1; i < prices.length; i++){
        if (prices[i] - prices[min_index] > max_profit) {
            max_profit = prices[i] - prices[min_index]
            sell_index = i
            buy_index = min_index
        }
        if (prices[i] < prices[min_index]) {
            min_index = i
        }
    }
    return [buy_index, sell_index]

}
