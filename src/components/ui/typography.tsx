export function TypographyH1({ children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
      {...props}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  )
}
