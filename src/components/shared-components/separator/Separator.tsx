type SeparatorProps = {
  sectionTitle: string
}
const Separator = ({sectionTitle} : SeparatorProps) => {
  return (
    <div id={`${sectionTitle}`} className="pt-20"/>
  )
}

export default Separator