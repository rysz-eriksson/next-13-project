export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="mx-auto max-w-md p-12 sm:max-w-2xl lg:max-w-6xl">
            {children}
        </section>
    )
  }
  