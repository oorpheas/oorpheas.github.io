const _form = document.getElementById("contactForm");

    _form.addEventListener("submit", function (event) {

    event.preventDefault();

    const _name = document.getElementById("name").value;
    const _email = document.getElementById("email").value;
    const _message = document.getElementById("message").value;

    const _path = window.location.pathname;
    const _isEnglish = _path.startsWith("/en");

    const _subjectText = _isEnglish ? "Contact via portfolio website" : "Contato pelo site";

    const _subject = encodeURIComponent(_subjectText);

    const _body = encodeURIComponent(
        `Nome: ${_name}\n` +
        `Email: ${_email}\n\n` +
        `Mensagem:\n${_message}`
    );

    window.location.href =
        `mailto:orfeu.dev@gmail.com?subject=${_subject}&body=${_body}`;
    });
