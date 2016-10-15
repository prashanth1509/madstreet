export default {
    apiEndpoint: 'https://api.myjson.com/bins/4te92',

    getProductList(){
        return new Promise((resolve, reject) => {
            fetch(this.apiEndpoint).then(
                (response) => {
                    response.json().then(
                        (responseJSON) => resolve(responseJSON)
                    );
                }
            ).catch((error)=>reject(error));
        });
    }
}