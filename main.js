/**
 * Return the charge for a given amount of money and an available set of coins
 *
 * @author Maxime BERGEON <https://github.com/Cr3aHal0>
 *
 * @param toPay amount to be split into pieces
 * @param coins array of available coin values
 *
 * @returns array|null an array of coin values if such a combination can exist, null otherwise
 */
var changeMaking = (toPay, coins) => {

    coins.sort();

    //queue
    let queue = [];
    queue.push({
        amount: toPay,
        comp: []
    });

    //memo structure
    let memo = {};
    memo[toPay] = 0;

    while (queue.length > 0) {

        let next = queue.shift();

        if (next.amount === 0) {
            next.comp.sort((a,b) => a-b);

            return next.comp;
        }

        //Did we go too far
        if (next.amount < 0) continue;

        //Is there any shorter path (memoization)
        if (!!memo[next.amount] && memo[next.amount] < next.comp.length) continue;

        //memoization
        if (!memo[next.amount] || memo[next.amount] > next.comp.length) {
            memo[next.amount] = next.comp.length;
        }

        let idx = 0;
        while (idx < coins.length && coins[idx] > next.amount) {
            idx++;
        }

        for (let i = idx; i < coins.length; i++) {
            queue.push({
                amount: next.amount - coins[i],
                comp: next.comp.concat(coins[i])
            });
        }
    }

    return null;

}

module.exports = changeMaking;