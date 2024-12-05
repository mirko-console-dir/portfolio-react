import "@/css/loader.css"
const Loader = () => {
  const count = 10
  return (
    <div className="flex justify-center">
      <div className="loader" style={{"--count": count} as React.CSSProperties}>
        {new Array(count).fill(0).map((_,i)=>(
          <span key={i} style={{"--index": i} as React.CSSProperties}/>
        ))}
      </div>
    </div>
  )
}

export default Loader