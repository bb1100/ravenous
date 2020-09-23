const apiKey = 'Ap0v_TAGJNqeYmSn9kt31wfXrScBbcwW8ASLhnjLk1QNBftz7XhitySQYkqgGuEnJhsC9KFgSSz6rFroRbQCApvKKG5rKg6rlUOEMylOGbUGqDIT0epWEAKgHB9qX3Yx';
//const clientID = 'kIbgJ9qZIXzTucRuzj1txg';
 const Yelp = {
    search(term, location, sortBy) {
        //Your fetch() will currently not function correctly due to CORS restrictions.
        //We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.
        //When we make requests to the Yelp API, we have to present a form of identification for the browser. This is because the Yelp API wants to know that we are authorized to access the API.
        //This identification is presented using our API key as a browser header.
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: 
            {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            };
            return [businesses];
        })
    }
};

export default Yelp;
