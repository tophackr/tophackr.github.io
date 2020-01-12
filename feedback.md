---
layout: page
title: Feedback
---

<div id="feedback">
    <div class="text-center">
        <img id="project-icon" class="img-fluid" width="200">
        <h1 class="my-4">Feedback</h1>
        <div id="addinfo"></div>
    </div>
    <form id="feedback-form" class="my-5">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="form__name">Name</label>
                    <input type="text" class="form-control" name="name" id="form__name">
                    <div data-sk-error="name"></div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="form__email">Email *</label>
                    <input type="email" class="form-control" name="email" id="form__email" required>
                    <div data-sk-error="email"></div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="form__message">Message *</label>
            <textarea class="form-control" name="message" id="form__message" minlength="20" rows="7" required autofocus></textarea>
            <div data-sk-error="message"></div>
        </div>
        <button type="submit" class="btn btn-primary">Send Feedback</button>
    </form>
</div>