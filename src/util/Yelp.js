const apiKey="xo4_Hla9gmN2Rdr8DfTomCqzCwbr94p45J64U0rRQLrG3arG_oTxa3qlDdOX7RHA4U9-X4U3okqSiI_WZ4CqTVlEJToSIfkh7eoEMh6HwhhUHzQtYukBQlMuaujPXHYx";
const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }          
        })
        .then((response) => {
            console.log('response', response)
            return response.json();
        })
        .then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business)=>{
                    return ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    });
                });
            }
        });
    }
};
export default Yelp;