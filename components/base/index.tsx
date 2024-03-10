// import "./base.css"
import "./track-column.css"
const Base = () => {
  return (
    <div>
      <div className="grid">
        <h2 className="item1 boots-logo">Boots Fashion</h2>
        <img className="item2 img-fill" src="/boots.jpg" alt="" width="1980" height="1512" />
        <img className="item3 img-fill" src="/shirts.jpg" alt="" width="1320" height="1980" />
        <img className="item4 img-fill" src="/shop.jpg" alt="" width="1600" height="1144" />
        <img className="item5 img-fill" src="/bag.jpg" alt="" width="1320" height="1980" />
      </div>
    </div>
  )
}
export default Base