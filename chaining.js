const products = [
    {
        name: "belt",
        price: 150
    },
    {
        name: "shoes",
        price: 100
    },
    {
        name: "cap",
        price: 350
    },
    {
        name: "belt",
        price: 150
    },
    {
        name: "shoes",
        price: 100
    },
    {
        name: "cap",
        price: 350
    },
    {
        name: "belt",
        price: 150
    },
    {
        name: "shoes",
        price: 100
    },
    {
        name: "cap",
        price: 350
    }
];

let nonPremiumProducts = products.filter(p => p.price <= 300)
    .map(p => {
        return {
            name: p.name.toUpperCase(),
            price: p.price
        }
    })
    .reduce((stock, current) => {
        let item = stock.find(s => s.name === current.name);

        if(!item)
            stock.push({
                name: current.name,
                price: current.price,
                stock: 1
            });
        else
            ++item.stock;

        return stock;
    }, []);

console.log(nonPremiumProducts);