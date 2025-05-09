export const Footer = () => {
  return (
    <footer>
      <p className="mx-auto w-fit py-6 text-gray-400">
        © {new Date().getFullYear()} | Desarrollado por{" "}
        <a
          href="https://tronix-portfolio.vercel.app"
          title="Ir al sitio web del desarrollador"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:text-gray-50 hover:underline"
        >
          7R0N1X
        </a>
      </p>
    </footer>
  );
};
