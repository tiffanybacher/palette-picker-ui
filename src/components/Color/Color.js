function Color(props) {
  return (
    <section>
      <div style=`background-color:${props.hexcode};`></div>
      {props.isLocked && <p onClick={props.setColor}> LOCKED </p>}
      {!props.isLocked && <p onClick={props.setColor}> UNLOCKED </p>}
      <p> {props.hexcode} </p>
    </section>
  )
}