class ApiProducts {
    constructor(){
        this.products = []
        this.id = 0
    }

    findProduct(id){
        const product = this.products.find((product) => product.id == id);
        return product
    }

    allProducts(){
        return[...this.products]
    }

    saveProduct(product){
        const newProd = {...product, id: ++this.id};
        this.products.push(newProd)
    }

    deleteById(id){
        const findId = this.products.findIndex(p => p.id === id);
        this.products.splice(findId,1)
    }
    
}

module.exports = {ApiProducts}