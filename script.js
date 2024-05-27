function findEmails() {
    var domain = document.getElementById('domain').value;
    if (domain.trim() !== '') {
        fetchEmails(domain);
    } else {
        alert('Please enter a domain.');
    }
}

function fetchEmails(domain) {
    fetch('hunter_api.php?domain=' + domain)
        .then(response => response.json())
        .then(data => {
            displayEmails(data.emails);
        })
        .catch(error => console.error('Error:', error));
}

function displayEmails(emails) {
    var emailList = document.getElementById('email-list');
    emailList.innerHTML = '';
    if (emails.length > 0) {
        var ul = document.createElement('ul');
        emails.forEach(email => {
            var li = document.createElement('li');
            li.textContent = email;
            ul.appendChild(li);
        });
        emailList.appendChild(ul);
    } else {
        emailList.textContent = 'No emails found for this domain.';
    }
}
