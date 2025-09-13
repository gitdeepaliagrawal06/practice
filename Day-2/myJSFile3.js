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

    // Access the property of JS Object
    console.log(emp1.name);

    //Assigning value to property of JS Object
    emp1.name = "Jane";

    //Access the property of JS Object
    console.log(emp1.name);//Jane

}
function showTopRatedRes() {
    // API call to get the info from server
    const restaurants = {
        "areawise": {
            "aundh": ["Roso", "Red Chilli", "Subway"],
            "shivajinagar": ["WorldOfVeg", "Sagar"],
            "koregaonParkk": ["88", "Clubs"]
        },
        "ratingsWise": {
            "topRated": ["Carlton", "Hyatt"],
            "4Star": ["ChinaTown", "AsianC"]
        }
    }

    console.log(restaurants.ratingsWise.topRated);

    // Display on my HTML Document
    let resName = document.createElement("p");
    // <p>Res name</p>
    resName.innerHTML = restaurants.ratingsWise.topRated;

    document.body.appendChild(resName);


}

