    class Person {
        constructor(id, firstName, lastName) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const updateDisplay = (response) => document.getElementById("output").innerText = JSON.stringify(response);

    function create(event) {
        event.preventDefault();
        // get the values that are in the input fields
        const personIdElement = document.getElementById("person-id");
        const firstNameElement = document.getElementById("first-name");
        const lastNameElement = document.getElementById("last-name");

        const personIdValue = personIdElement.value;
        const firstNameValue = firstNameElement.value;
        const lastNameValue = lastNameElement.value;
        const person = new Person(personIdValue, firstNameValue, lastNameValue);

        // call the create function of the spring boot app with the values
        const personData = JSON.stringify(person);
        console.log(personData);

        $.ajax({
            type: "POST",
            crossDomain: true,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            url: "/create",
            data: personData,
            dataType: "JSON",
            success: function(response) {
                updateDisplay(response);
            },
            error: function(error) {
                updateDisplay(error)
            }
        });
    }

    function readById(event) {
        event.preventDefault();
        // get the values that are in the input fields
        const personIdElement = document.getElementById("person-id");
        const personIdValue = personIdElement.value;

        $.ajax({
            type: "GET",
            crossDomain: true,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            url: "/read/" + personIdValue,
            dataType: "JSON",
            success: function(response) {
                updateDisplay(response);
            },
            error: function(error) {
                updateDisplay(error);
            }
        });
    }

    function readAll(event) {
        event.preventDefault();

        $.ajax({
            type: "GET",
            crossDomain: true,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            url: "/readAll",
            dataType: "JSON",
            success: function(response) {
                updateDisplay(response);
            },
            error: function(error) {
                updateDisplay(error);
            }
        });
    }

    function update(event) {
        event.preventDefault();
        // get the values that are in the input fields
        const personIdElement = document.getElementById("person-id");
        const firstNameElement = document.getElementById("first-name");
        const lastNameElement = document.getElementById("last-name");

        const personIdValue = personIdElement.value;
        const firstNameValue = firstNameElement.value;
        const lastNameValue = lastNameElement.value;
        const person = new Person(personIdValue, firstNameValue, lastNameValue);

        // call the update function of the spring boot app with the values
        const personData = JSON.stringify(person);
        console.log(personData);

        $.ajax({
            type: "PUT",
            crossDomain: true,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            url: "/update/" + personIdValue,
            data: personData,
            dataType: "JSON",
            success: function(response) {
                updateDisplay(response);
            },
            error: function(error) {
                updateDisplay(error);
            }
        });
    }

    function deleteById(event) {
        event.preventDefault();
        // get the values that are in the input fields
        const personIdElement = document.getElementById("person-id");
        const personIdValue = personIdElement.value;

        $.ajax({
            type: "DELETE",
            crossDomain: true,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            url: "/delete/" + personIdValue,
            dataType: "JSON",
            success: function(response) {
                updateDisplay(response);
            },
            error: function(error) {
                updateDisplay(error);
            }
        });
    }