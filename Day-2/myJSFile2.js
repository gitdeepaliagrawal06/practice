function onDeleteBtnClick() {
    console.log("DELETE CALLED")

    // Variables

    let v1 = "test";
    v1 = 2;
    v1 = 23.1243
    v1 = false;

    // JS Objects

    const emp1 = {
        "name": "John",
        "id": 1234,
        "height": 6,
        "contacNumber": 99999999,
        "address": "main road, Delhi"
    }

    //Access the property of JS Object
    console.log(emp1.name);

    //Assigning value to property of JS Object
    emp1.name = "Jane";

    //Access the property of JS Object
    console.log(emp1.name);//Jane

}

function showTopRatedRes() {
    // API call to get info from the server

    const restaurants = {
        "areawise": {
            "Nehru Nagar": ["Roso", "Red Chilli", "Subway"],
            "Indira Nagar": ["WorldOfVeg", "Sagar"],
            "shiv Nagar": ["88", "Clubs"]
        },
        "ratingwise": {
            "topRated": ["Carlton", "Hyatt"],
            "4Star": ["ChinaTown", "AsianC"]
        }
    }
    console.log(restaurants.ratingwise.topRated);

    //Display on my Document
    let resName = document.createElement("p");
    // <p> resName </p>

    resName.innerHTML = restaurants.ratingwise.topRated;
    document.body.appendChild(resName);
}