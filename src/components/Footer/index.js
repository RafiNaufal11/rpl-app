import "./style.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/youtube.png`}
          alt="Youtube-icon"
        />
      </a>
      <a href="https://www.facebook.com/DwinaTech" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/linkedin.png`}
          alt="LinkIn-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/github.png`}
          alt="GitHub-icon"
        />
      </a>
      <a href="https://twitter.com/diwna201" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/instagram.png`}
          alt="Instagram-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;