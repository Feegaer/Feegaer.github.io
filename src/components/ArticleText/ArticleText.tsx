export default function ArticleText({ title, subtitle, text}: {title: string, subtitle?: string, text?: string}) {
  return (
    <article className="text-center lg:text-left z-1">
      <header className="font-bold">{title}</header>
      <h6 className="font-semibold">{subtitle}</h6>
      <p>
        {text}
      </p>
    </article>
  )
}