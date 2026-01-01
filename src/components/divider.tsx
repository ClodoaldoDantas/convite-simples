export function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-72 h-px my-8 bg-zinc-200 border-0" />
      <span className="absolute px-3 font-medium text-heading -translate-x-1/2 bg-white left-1/2">
        {children}
      </span>
    </div>
  )
}
