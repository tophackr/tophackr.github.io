---
---

window.sk=window.sk||function(){(sk.q=sk.q||[]).push(arguments)};

(() => {
    const icons = {
        {% for project in site.projects %}
            {%- for file in site.static_files -%}
                {%- assign path = 'assets/' | append: project.slug | append: '/icon' -%}
                {%- if file.path contains path -%}
        '{{ project.title }}': '{{ file.path }}',
                {%- endif -%}
            {%- endfor -%}
        {% endfor %}
    };

    const repoUrls = {
        {% for project in site.projects %}
            {%- if project.repo and project.feedback_repo != false -%}
        '{{ project.title }}': '{{ project.repo }}',
            {%- endif -%}
        {% endfor %}
    };

    $('button[type="submit"]').on('click', event => {
        $(event.target)
            .closest('form')
            .find('[required]')
            .addClass('required');
    });

    const params = new URL(location.href).searchParams;

    if (params.has('project')) {
        const project = params.get('project');
        const title = `Feedback for ${project}`;

        $('#feedback h1').text(title);
        $('title').text(title);

        if (icons[project]) {
            $('#project-icon').attr('src', icons[project]);
        }

        if (project in repoUrls) {
            const repoUrl = repoUrls[project];
            const searchParams = new URLSearchParams();
            searchParams.append('body', `
<!--
Provide your feedback below. Include as many details as possible.
-->



---
${params.get('metadata') || ''}
            `.trim());

            const url = `${repoUrl}/issues/new?${searchParams}`;

            $('#addinfo').show().html(`
                If you have a GitLab user, <a href="${url}">open an issue on the repo</a> instead.
            `);
        }
    }

    const form = $('#feedback-form');

    // Include all the existing search params
    for (const [key, value] of params) {
        if (key === 'nameField') {
            form.find('[name="name"]').val(value);
            continue;
        }

        if (key === 'emailField') {
            form.find('[name="email"]').val(value);
            continue;
        }

        if (key === 'messageField') {
            form.find('[name="message"]').val(value).get(0).setSelectionRange(0, 0);
            continue;
        }

        if (key === 'extraInfo') {
            form.append(
                $(`<textarea style="display:none" readonly name="${key}"></textarea>`).text(value)
            );
            continue;
        }

        form.append(
            $(`<input type="hidden" name="${key}">`).val(value)
        );
    }

    const getSubject = () => {
        const project = params.has('project') ? (': ' + params.get('project')) : '';
        const message = form.find('[name="message"]').val().slice(0, 100);
        return 'Feedback' + project + ' - ' + message;
    };

    sk('form', '#feedback-form', {
        site: '350fb47c9c99',
        form: 'feedback',
        data: {
            _subject: getSubject
        },
        onSuccess() {
            $('#feedback').html('<h1>Thanks for the feedback!</h1><p>You will now be redirected to my website.</p>');

            setTimeout(() => {
                window.location.href = 'https://tophackr.com';
            }, 3000);
        }
    });
})();