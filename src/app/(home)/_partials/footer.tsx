export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center py-8">
      <p className="text-zinc-500">
        © {currentYear} Chega Mais. Todos os direitos reservados.
      </p>
    </footer>
  )
}
