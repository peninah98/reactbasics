const List = ({list, message, field, name}) => {
    

  return (
    <div>
        <h1>
        This is the list of different items dear keep in touch
        </h1>

        <p>{list.toString()}</p>
        <p>I am {name}, my tech field is {field}</p>

    </div>
  )
}

List.defaultProps = {
    name:"Amber",
    field:"IT Support"
}

export default List