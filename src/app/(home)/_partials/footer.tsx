export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center py-8 px-4">
      <p className="text-zinc-500">
        © {currentYear} Convite Simples. Todos os direitos reservados.
      </p>

      <a
        className="text-zinc-500 hover:text-blue-600"
        href="https://www.flaticon.com/free-icons/heart"
        title="heart icons"
      >
        Heart icons created by Kiranshastry - Flaticon
      </a>
    </footer>
  )
}
