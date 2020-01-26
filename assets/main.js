const home = {
    select: document.querySelector.bind(document),
    selectAll: document.querySelectorAll.bind(document)
};

(async () => {
    username = 'tophackr';
    email = 'tophackr@icloud.com';

    const response_events = await fetch(`https://api.github.com/users/${username}/events/public?sort=updated`);
    const response_repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=8&sort=updated`);
    const json_events = await response_events.json();
    const json_repos = await response_repos.json();

    let latestCommit;
    const latestPushEvent = json_events.find(event => {
        if (event.type !== 'PushEvent') {
            return false;
        }

        latestCommit = event.payload.commits.reverse().find(commit => commit.author.email === email);
        return Boolean(latestCommit);
    });

    if (!latestCommit) {
        home.select('#latest-commit').textContent = 'No commit';
        return;
    }

    let repoURL = isURL(latestPushEvent.repo.url);

    const commitMessageElement = home.select('#latest-commit #message');
    commitMessageElement.href = `${repoURL}/commit/${latestCommit.sha}`;
    commitMessageElement.textContent = latestCommit.message;

    const commitDateElement = home.select('#latest-commit #date');
    commitDateElement.innerHTML = `${isTimeAgo(latestPushEvent.created_at)} in <a class="text-body" href="${repoURL}">${latestPushEvent.repo.name}</a>`;

    let repos = '';
    const repoElement = home.select('#latest-repos');

    json_repos.forEach(repo => {
        repos += `<div class="col-md-6 my-3"><a class="h4 text-body mr-2" href="${repo.html_url}">${repo.name}</a>`;
        if (repo.language)
            repos += `<span class="h5"><span class="badge badge-warning">${repo.language}</span></span>`;
        if (repo.description)
            repos += `<p class="text-muted">${repo.description}</p>`;
        repos += `</div>`;
        repoElement.innerHTML = repos;
    });
})();

function isURL(u) {
    return u.replace("api", "www").replace("/repos", "");
}

function isTimeAgo(t) {
    let current = new Date();
    let previous = new Date(t);
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var elapsed = current - previous;
    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth && Math.round(elapsed / msPerDay) <= 2) {
        return Math.round(elapsed / msPerDay) + " days ago";
    } else {
        return previous.toLocaleDateString(['en'], {
            month: "long",
            day: "numeric"
        });
    }
}