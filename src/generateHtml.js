function generateManagerCard(manager) {   // this handles generating the manager cards
    return `
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">integration_instructions</i>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
        `;
}

function generateEngineerCard(engineer) { // this function generates the engineer card
    return `
    <div class="col-4 mt-4">    
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">engineering</i>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

function generateInternCard(intern) {  // this generates the intern card
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">person</i>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
</div>
</div>
`;
}


const generatedHTML = (data) => {     // this returnes the generated html joined together to be placed into the template
    cardArray = data.map(employee => {
        const role = employee.getRole();
        if (role === "Manager") {
            return generateManagerCard(employee);
        } else if (role === 'Engineer') {
            return generateEngineerCard(employee);
        } else if (role === 'Intern') {
            return generateInternCard(employee);
        }
    });

    const employeeCardArray = cardArray.join('');

    const generatedTeam = generateSite(employeeCardArray);
    return generatedTeam;
}


function generateSite(generatedTeam) {  // this is the template that the generatedTeam gets placed in
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${generatedTeam}
                </div>
            </div>
        </main>
        
    </body>
   
    </html>
  `;
}

// export to index
module.exports = generatedHTML; 
